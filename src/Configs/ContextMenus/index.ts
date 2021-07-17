import { defaultContextMenuConfig } from './default.config';
import { FileContextMenu } from './file.config';

export { defaultContextMenuConfig as Default_Menu } from './default.config'
export { FileContextMenu } from './file.config'

export const getContextMenu = (id: string) => {
    switch (id) {
        case "desktop-item":
            return FileContextMenu

        default:
            return defaultContextMenuConfig
    }
}