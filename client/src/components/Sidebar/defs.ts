// Menu types

export interface MenuItemDefinition {
    label: string;
    iconName: string | null;
}

export class MenuDefinition {
    items: MenuItemDefinition[];

    constructor(items: MenuItemDefinition[]) {
        this.items = items;
    }
}

export class LinkMenuItemDefinition implements MenuItemDefinition {
    label: string;
    url: string;
    iconName: string | null;

    constructor({ label, url, icon_name = null }) {
        this.label = label;
        this.url = url;
        this.iconName = icon_name;
    }
}

export class SubMenuItemDefinition implements MenuItemDefinition {
    label: string;
    menu: MenuDefinition;
    iconName: string | null;

    constructor({ label, menu, icon_name = null }) {
        this.label = label;
        this.menu = menu;
        this.iconName = icon_name;
    }
}

export class PageExplorerMenuItemDefinition extends LinkMenuItemDefinition {
    startPageId: number;

    constructor({ label, url, start_page_id, icon_name = null }) {
        super({ label, url, icon_name })
        this.startPageId = start_page_id;
    }
}

export class SettingsMenuItemDefinition extends SubMenuItemDefinition {
}


// Modules

export class WagtailBrandingModuleDefinition {
    constructor() {
    }
}

export class CustomBrandingModuleDefinition {
    constructor() {
    }
}

export class SearchModuleDefinition {
    constructor() {
    }
}

export class MainMenuModuleDefinition {
    menu: MenuDefinition;

    constructor(menu: MenuDefinition) {
        this.menu = menu;
    }
}

export class AccountModuleDefinition {
    constructor() {
    }
}
