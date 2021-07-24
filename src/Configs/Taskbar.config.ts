import startMenu from '../assets/icons/taskbar/Windows.png'
import search from '../assets/icons/taskbar/Search.png'
import taskmanager from '../assets/icons/taskbar/taskmanager.png'
import widget from '../assets/icons/taskbar/Widgets.png'

import { toggleStartMenu } from '../store/startMenu'
import { toggleWidgets } from '../store/widgets'
// import { StartMenuIcon } from '../assets/icons/startmenu'

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
}, {
  name: "Task Manager",
  url: taskmanager
}, {
  name: "Widgets",
  url: widget,
  action: toggleWidgets
}]
