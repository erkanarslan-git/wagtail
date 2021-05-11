from typing import List

from django import forms
from django.urls import reverse
from django.utils.functional import cached_property

from wagtail.admin.staticfiles import versioned_static
from wagtail.core.telepath import Adapter, adapter


class BaseSidebarAdapter(Adapter):
    @cached_property
    def media(self):
        return forms.Media(js=[
            versioned_static('wagtailadmin/js/telepath/sidebar.js'),
        ])


# Main menu

class MenuItem:
    def __init__(self, label: str, icon_name: str = None):
        self.label = label
        self.icon_name = icon_name

    def adapt(self):
        return [
            {
                'label': self.label,
                'icon_name': self.icon_name,
            }
        ]


@adapter('wagtail.sidebar.Menu', base=BaseSidebarAdapter)
class Menu:
    def __init__(self, items: List[MenuItem]):
        self.items = items

    def adapt(self):
        return [
            self.items,
        ]


@adapter('wagtail.sidebar.LinkMenuItem', base=BaseSidebarAdapter)
class LinkMenuItem(MenuItem):
    def __init__(self, label: str, url: str, icon_name: str = None):
        super().__init__(label, icon_name=icon_name)
        self.url = url

    def adapt(self):
        args = super().adapt()
        args[0]['url'] = self.url
        return args


@adapter('wagtail.sidebar.SubMenuItem', base=BaseSidebarAdapter)
class SubMenuItem(MenuItem):
    def __init__(self, label: str, menu: Menu, icon_name: str = None):
        super().__init__(label, icon_name=icon_name)
        self.menu = menu

    def adapt(self):
        args = super().adapt()
        args.append(self.menu)
        return args


@adapter('wagtail.sidebar.PageExplorerMenuItem', base=BaseSidebarAdapter)
class PageExplorerMenuItem(LinkMenuItem):
    def __init__(self, label: str, url: str, start_page_id: int, icon_name: str = None):
        super().__init__(label, url, icon_name=icon_name)
        self.start_page_id = start_page_id

    def adapt(self):
        args = super().adapt()
        args.append(self.start_page_id)
        return args


@adapter('wagtail.sidebar.SettingsMenuItem', base=BaseSidebarAdapter)
class SettingsMenuItem(SubMenuItem):
    pass


# Modules

@adapter('wagtail.sidebar.WagtailBrandingModule', base=BaseSidebarAdapter)
class WagtailBrandingModule:
    def adapt(self):
        return [
            reverse('wagtailadmin_home'),
            {
                'mobileLogo': versioned_static('wagtailadmin/images/wagtail-logo.svg'),
                'desktopLogoBody': versioned_static('wagtailadmin/images/logo-body.svg'),
                'desktopLogoTail': versioned_static('wagtailadmin/images/logo-tail.svg'),
                'desktopLogoEyeOpen': versioned_static('wagtailadmin/images/logo-eyeopen.svg'),
                'desktopLogoEyeClosed': versioned_static('wagtailadmin/images/logo-eyeclosed.svg'),
            }
        ]


@adapter('wagtail.sidebar.CustomBrandingModule', base=BaseSidebarAdapter)
class CustomBrandingModule:
    def adapt(self):
        return []


@adapter('wagtail.sidebar.SearchModule', base=BaseSidebarAdapter)
class SearchModule:
    def __init__(self, search_area):
        self.search_area = search_area

    def adapt(self):
        return [
            self.search_area.url
        ]


@adapter('wagtail.sidebar.MainMenuModule', base=BaseSidebarAdapter)
class MainMenuModule:
    def __init__(self, menu: Menu):
        self.menu = menu

    def adapt(self):
        return [
            self.menu
        ]


@adapter('wagtail.sidebar.AccountModule', base=BaseSidebarAdapter)
class AccountModule:
    def __init__(self, user):
        self.user = user

    def adapt(self):
        from wagtail.admin.templatetags.wagtailadmin_tags import avatar_url

        return [
            self.user.first_name or self.user.get_username(),
            avatar_url(self.user, size=50),

            # TODO: Make this into a Menu
            reverse('wagtailadmin_account'),
            reverse('wagtailadmin_logout'),
        ]
