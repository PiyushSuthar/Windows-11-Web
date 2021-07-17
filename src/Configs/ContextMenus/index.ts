import { defaultContextMenuConfig } from './default.config';
import { ControlPanel_CTX_MENU, Recycle_BIN_CTX_MENU, ThisPC_CTX_MENU } from './DesktopIcons';
import { FileContextMenu } from './file.config';
import { Taskbar_CTX_MENU } from './taskbar.config';

export { defaultContextMenuConfig as Default_Menu } from './default.config'
export { FileContextMenu } from './file.config'

export const getContextMenu = (id: string) => {
    switch (id) {
        case "desktop-item":
            return FileContextMenu

        case "this-pc-ctx-menu":
            return ThisPC_CTX_MENU

        case "recycle-bin-ctx-menu":
            return Recycle_BIN_CTX_MENU

        case "control-panel-ctx-menu":
            return ControlPanel_CTX_MENU

        case "taskbar-ctx":
            return Taskbar_CTX_MENU
        default:
            return defaultContextMenuConfig
    }
}