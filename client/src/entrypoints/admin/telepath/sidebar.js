// Main menu

class MenuDefinition {
    constructor(items) {
        this.items = items;
    }
}

class LinkMenuItemDefinition {
    constructor({ label, url, icon_name = null }) {
        this.label = label;
        this.url = url;
        this.iconName = icon_name;
    }
}

class SubMenuItemDefinition {
    constructor({ label, menu, icon_name = null }) {
        this.label = label;
        this.menu = menu;
        this.iconName = icon_name;
    }
}

class PageExplorerMenuItemDefinition {
    constructor({ label, url, start_page_id, icon_name = null }) {
        this.label = label;
        this.url = url;
        this.startPageId = start_page_id;
        this.iconName = icon_name;
    }
}

class SettingsMenuItemDefinition extends SubMenuItemDefinition {
    constructor({ label, menu, icon_name = null }) {
        this.label = label;
        this.menu = menu;
        this.iconName = icon_name;
    }
}

window.telepath.register('wagtail.sidebar.Menu', MenuDefinition);
window.telepath.register('wagtail.sidebar.LinkMenuItem', LinkMenuItemDefinition);
window.telepath.register('wagtail.sidebar.SubMenuItem', SubMenuItemDefinition);
window.telepath.register('wagtail.sidebar.PageExplorerMenuItem', PageExplorerMenuItemDefinition);
window.telepath.register('wagtail.sidebar.SettingsMenuItem', SettingsMenuItemDefinition);


// Modules

class WagtailBrandingModuleDefinition {
    constructor() {
    }
}

class CustomBrandingModuleDefinition {
    constructor() {
    }
}

class SearchModuleDefinition {
    constructor() {
    }
}

class MainMenuModuleDefinition {
    constructor(menu) {
        this.menu = menu;
    }
}

class AccountModuleDefinition {
    constructor() {
    }
}

window.telepath.register('wagtail.sidebar.WagtailBrandingModule', WagtailBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.CustomBrandingModule', CustomBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.SearchModule', SearchModuleDefinition);
window.telepath.register('wagtail.sidebar.MainMenuModule', MainMenuModuleDefinition);
window.telepath.register('wagtail.sidebar.AccountModule', AccountModuleDefinition);
