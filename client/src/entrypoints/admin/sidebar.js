import { initSidebar } from '../../components/Sidebar';
import {
    MenuDefinition,
    LinkMenuItemDefinition,
    SubMenuItemDefinition,
    PageExplorerMenuItemDefinition,
    SettingsMenuItemDefinition,
    CustomBrandingModuleDefinition,
    SearchModuleDefinition,
    MainMenuModuleDefinition,
    AccountModuleDefinition,
} from '../../components/Sidebar/defs';

import { WagtailBrandingModuleDefinition } from '../../components/Sidebar/modules/WagtailBranding';

window.telepath.register('wagtail.sidebar.Menu', MenuDefinition);
window.telepath.register('wagtail.sidebar.LinkMenuItem', LinkMenuItemDefinition);
window.telepath.register('wagtail.sidebar.SubMenuItem', SubMenuItemDefinition);
window.telepath.register('wagtail.sidebar.PageExplorerMenuItem', PageExplorerMenuItemDefinition);
window.telepath.register('wagtail.sidebar.SettingsMenuItem', SettingsMenuItemDefinition);

window.telepath.register('wagtail.sidebar.WagtailBrandingModule', WagtailBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.CustomBrandingModule', CustomBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.SearchModule', SearchModuleDefinition);
window.telepath.register('wagtail.sidebar.MainMenuModule', MainMenuModuleDefinition);
window.telepath.register('wagtail.sidebar.AccountModule', AccountModuleDefinition);

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
});
