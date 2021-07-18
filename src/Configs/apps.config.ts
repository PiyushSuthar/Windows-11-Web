import edge from '../assets/icons/taskbar/edge.ico'
import ms_store from '../assets/icons/taskbar/ms_store.png'
import file_explorer from '../assets/icons/taskbar/file_explorer.ico'
import { MSEdgeIcon, MSStoreIcon } from '../assets/icons/startmenu'
import { ControlPanel, RecycleBin, ThisPC } from '../assets/icons/Desktop'
import { Apps } from './startMenu.config'

export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
        pinned?: boolean
    }
}

export const AppsConfig: App = {
    edge: {
        title: "Edge",
        isActive: false,
        icon: MSEdgeIcon,
        pinned: true
    },
    "file-explorer": {
        title: "File Explorer",
        isActive: false,
        icon: file_explorer,
        pinned: true
    },
    "ms-store": {
        title: "Microsoft Store",
        isActive: false,
        icon: MSStoreIcon,
        pinned: true
    },
    "this-pc": {
        title: "This PC",
        isActive: false,
        icon: ThisPC
    },
    "recycle-bin": {
        title: "Recycle Bin",
        isActive: false,
        icon: RecycleBin
    },
    "control-panel": {
        title: "Control Panel",
        isActive: false,
        icon: ControlPanel
    },
    ...Apps,
}