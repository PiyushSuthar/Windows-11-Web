import startMenu from '../assets/icons/taskbar/startmenu.ico'
import edge from '../assets/icons/taskbar/edge.ico'
import search from '../assets/icons/taskbar/search.ico'
import ms_store from '../assets/icons/taskbar/ms_store.png'
import file_explorer from '../assets/icons/taskbar/file_explorer.ico'

export interface icon {
  name: string
  url: string
}
export const ICONS: icon[] = [{
  name: "Start menu",
  url: startMenu
}, {
  name: "Search",
  url: search
}, {
  name: "Edge",
  url: edge
}, {
  name: "File Explorer",
  url: file_explorer
}, {
  name: "Ms store",
  url: ms_store
}]
