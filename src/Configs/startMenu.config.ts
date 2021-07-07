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
    name: string;
    icon: string;
    action?: () => void;
    isLink?: boolean;
    url?: string;
}
export const PinnedApps: PinnedApp[] = [{
    name: "GitHub",
    icon: GitHubIcon,
    isLink: true,
    url: "https://github.com/piyushsuthar/windows-11-web"
}, {
    name: "Twitter",
    icon: TwitterIcon,
    isLink: true,
    url: "https://twitter.com/piyushsthr"
}, {
    name: "Edge",
    icon: MSEdgeIcon
}, {
    name: "Word",
    icon: MSWordIcon
}, {
    name: "Photos",
    icon: PhotosIcon
}, {
    name: "PowerPoint",
    icon: MSPPTIcon
}, {
    name: "PhotoShop",
    icon: PhotoShopIcon
}, {
    name: "Movies & TV",
    icon: MoviesIcon
}, {
    name: "Chrome",
    icon: ChromeIcon
}, {
    name: "Teams",
    icon: MSTeamsIcon
}, {
    name: "VSCode",
    icon: VSCodeIcon
}, {
    name: "Music",
    icon: MSGrooveIcon
}, {
    name: "Excel",
    icon: MSExcelIcon
}, {
    name: "Your Phone",
    icon: YourHelpIcon
}, {
    name: "Store",
    icon: MSStoreIcon
}, {
    name: "Weather",
    icon: WeatherIcon
}, {
    name: "Whiteboard",
    icon: WhiteBoardIcon
}, {
    name: "Solitare",
    icon: SolitareIcon
}]