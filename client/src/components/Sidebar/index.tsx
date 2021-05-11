import React from 'react';
import ReactDOM from 'react-dom';

import { Sidebar } from './Sidebar';

export function initSidebar() {
    const element = document.getElementById('wagtail-sidebar');

    if (element instanceof HTMLElement && element.dataset.props) {
        const props = JSON.parse(element.dataset.props);
        const modules = (window as any).telepath.unpack(props['modules']);

        ReactDOM.render(
            <Sidebar {...props} modules={modules} />,
            element,
            () => {
                document.body.classList.add('ready');
            }
        );
    }
}
