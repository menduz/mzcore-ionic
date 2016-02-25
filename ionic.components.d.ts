/// <reference path="../mz-components/plugin.d.ts" />
/// <reference path="plugin.d.ts" />
import mzc = require('mz.plugin.mz-components');
export declare function activatePlugin(): void;
export declare class IonICampo extends mz.widgets.MzICampo {
    esDateTime: boolean;
    value: any;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    focus(): void;
}
export declare class IonToggle extends mz.Widget {
    checked: boolean;
    disabled: boolean;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    changed(e: mz.IMZComponentEvent): void;
}
export declare class IonCheckbox extends mz.Widget {
    checked: boolean;
    disabled: boolean;
    static EMPTY_TAG: boolean;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    changed(e: mz.IMZComponentEvent): void;
}
export declare class IonItemCheckbox extends mz.Widget {
    checked: boolean;
    disabled: boolean;
    static EMPTY_TAG: boolean;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    changed(e: mz.IMZComponentEvent): void;
}
export declare class IonItemToggle extends mz.Widget {
    checked: boolean;
    disabled: boolean;
    label: string;
    mood: string;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    changed(e: mz.IMZComponentEvent): void;
}
export declare class IonTabs extends mzc.MzTaber {
    iconStyle: string;
    labelVisible: boolean;
    striped: boolean;
    mood: boolean;
    top: boolean;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    top_changed(val: boolean): void;
    striped_changed(val: boolean): void;
}
export declare class IonTab extends mzc.MzTab {
    icon: string;
    label: string;
}
export declare class IonContent extends mz.Widget {
    padding_changed(padding: any): void;
    constructor(rootNode: HTMLElement, attr: any, children: mz.IChildWidget[], a: any, b: any, scope: any);
    scrollCtrl: any;
}
export declare class IonPopOver extends mz.Widget {
    visible: boolean;
    constructor(rootNode: HTMLElement, attr: any, children: mz.IChildWidget[], a: any, b: any, scope: any);
    hide(): void;
    show(): void;
    open(e: mz.IMZComponentEvent): void;
}
export declare class IonPopup extends mz.Widget {
    visible: boolean;
    title: string;
    sub_title: string;
    loading: boolean;
    constructor(rootNode: HTMLElement, attr: any, children: mz.IChildWidget[], a: any, b: any, scope: any);
    hide(): void;
    show(): void;
    bindPromise<T>(promise: Promise<T>): Promise<T>;
}
export declare class NavSidebar extends mz.Widget {
    private backdrop;
    width: number;
    visible: boolean;
    constructor(rootNode: HTMLElement, attr: mz.Dictionary<any>, children: mz.IChildWidget[], a: any, b: any, scope: any);
    visible_changed(visible: boolean): void;
    width_changed(width: number): void;
    show(): void;
    hide(): void;
}
