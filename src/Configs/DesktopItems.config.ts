import { ControlPanel, RecycleBin, ThisPC } from "../assets/icons/Desktop";

export interface Item {
    name: string;
    action?: () => void
    icon: string;
    appId: string
}
export const DesktopItems: Item[] = [{
    name: 'This PC',
    icon: ThisPC,
    appId: "this-pc"
}, {
    name: "Recycle Bin",
    icon: RecycleBin,
    appId: "recycle-bin"
}, {
    name: "Control Panel",
    icon: ControlPanel,
    appId: "control-panel"
}]