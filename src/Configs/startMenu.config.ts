import {
    ChromeIcon,
    GitHubIcon,
    MoviesIcon,
    MSEdgeIcon,
    MSPPTIcon,
    MSTeamsIcon,
    MSWordIcon,
    PhotoShopIcon,
    PhotosIcon,
    TwitterIcon,
    MSExcelIcon,
    MSGrooveIcon,
    MSStoreIcon,
    VSCodeIcon,
    YourHelpIcon,
    WeatherIcon,
    WhiteBoardIcon,
    SolitareIcon,
} from "../assets/icons/startmenu"

export type PinnedApp = {
    appId?: string
    title: string;
    icon: string;
    action?: () => void;
    isLink?: boolean;
    url?: string;
    pinned?: boolean
}
export const PinnedApps: PinnedApp[] = [{
    title: "GitHub",
    icon: GitHubIcon,
    isLink: true,
    url: "https://github.com/piyushsuthar/windows-11-web"
}, {
    title: "Twitter",
    icon: TwitterIcon,
    isLink: true,
    url: "https://twitter.com/piyushsthr"
}, {
    title: "Edge",
    icon: MSEdgeIcon
}, {
    title: "Word",
    icon: MSWordIcon
}, {
    title: "Photos",
    icon: PhotosIcon
}, {
    title: "PowerPoint",
    icon: MSPPTIcon
}, {
    title: "PhotoShop",
    icon: PhotoShopIcon
}, {
    title: "Movies & TV",
    icon: MoviesIcon
}, {
    title: "Chrome",
    icon: ChromeIcon
}, {
    title: "Teams",
    icon: MSTeamsIcon
}, {
    title: "VSCode",
    icon: VSCodeIcon,
    appId: "vscode"
}, {
    title: "Music",
    icon: MSGrooveIcon
}, {
    title: "Excel",
    icon: MSExcelIcon
}, {
    title: "Your Phone",
    icon: YourHelpIcon
}, {
    title: "Store",
    icon: MSStoreIcon,
    appId: "ms-store",
    pinned: true
}, {
    title: "Weather",
    icon: WeatherIcon
}, {
    title: "Whiteboard",
    icon: WhiteBoardIcon
}, {
    title: "Solitare",
    icon: SolitareIcon
}]

let a = 0;
export const Apps = () => {
    a++
    return PinnedApps.reduce((acc, app) => {
        return {
            ...acc,
            [app.appId || app.title]: {
                ...app
            }
        }
    }, {})
    console.log(a)
}

// console.log(Apps)