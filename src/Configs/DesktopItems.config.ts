import { ControlPanel, RecycleBin, ThisPC } from "../assets/icons/Desktop";
import { VSCodeIcon } from "../assets/icons/startmenu";

export interface Item {
    name: string;
    action?: () => void
    icon: string;
    appId: string;
    context_menu_id?: string
}
export const DesktopItems: Item[] = [{
    name: 'This PC',
    icon: ThisPC,
    appId: "this-pc",
    context_menu_id: "this-pc-ctx-menu"
}, {
    name: "Recycle Bin",
    icon: RecycleBin,
    appId: "recycle-bin",
    context_menu_id: "recycle-bin-ctx-menu"
}, {
    name: "Control Panel",
    icon: ControlPanel,
    appId: "control-panel",
    context_menu_id: "control-panel-ctx-menu"
}, {
    name: "Vs Code",
    icon: VSCodeIcon,
    appId: "vscode"
}]