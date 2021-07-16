import { ControlPanel, RecycleBin, ThisPC } from "../assets/icons/Desktop";

export interface Item {
    name: string;
    action?: () => void
    icon: string;
}
export const DesktopItems: Item[] = [{
    name: 'This PC',
    icon: ThisPC
}, {
    name: "Recycle Bin",
    icon: RecycleBin
}, {
    name: "Control Panel",
    icon: ControlPanel
}]