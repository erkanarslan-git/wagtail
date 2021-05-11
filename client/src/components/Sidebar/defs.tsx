import React from 'react';

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

export interface ModuleDefinition {
    render(context: {collapsed: boolean, navigate(url: string): Promise<void>}): React.ReactFragment;
}

export class CustomBrandingModuleDefinition implements ModuleDefinition {
    constructor() {
    }

    render() {
        return <></>;
    }
}

export class SearchModuleDefinition implements ModuleDefinition {
    constructor() {
    }

    render() {
        return <></>;
    }
}

export class MainMenuModuleDefinition implements ModuleDefinition {
    menu: MenuDefinition;

    constructor(menu: MenuDefinition) {
        this.menu = menu;
    }

    render() {
        return <></>;
    }
}

export class AccountModuleDefinition implements ModuleDefinition {
    constructor() {
    }

    render() {
        return <></>;
    }
}
