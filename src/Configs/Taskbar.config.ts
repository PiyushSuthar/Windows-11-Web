import startMenu from '../assets/icons/taskbar/startmenu.ico'
import search from '../assets/icons/taskbar/search.ico'

import { toggleStartMenu } from '../store/startMenu'

export interface icon {
  name: string
  url: string
  action?: () => any
}
export const ICONS: icon[] = [{
  name: "Start menu",
  url: startMenu,
  action: toggleStartMenu
}, {
  name: "Search",
  url: search
}]
