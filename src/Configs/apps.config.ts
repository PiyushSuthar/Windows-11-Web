import edge from '../assets/icons/taskbar/edge.ico'
import ms_store from '../assets/icons/taskbar/ms_store.png'
import file_explorer from '../assets/icons/taskbar/file_explorer.ico'
import { MSEdgeIcon, MSStoreIcon } from '../assets/icons/startmenu'

export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
    }
}

export const AppsConfig: App = {
    edge: {
        title: "Edge",
        isActive: false,
        icon: MSEdgeIcon
    },
    "file-explorer": {
        title: "File Explorer",
        isActive: false,
        icon: file_explorer
    },
    "ms-store": {
        title: "Micorsoft Store",
        isActive: false,
        icon: MSStoreIcon
    }
}