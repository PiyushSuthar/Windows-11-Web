import taskmanager from '../assets/icons/taskbar/taskmanager.png'
import widget from '../assets/icons/taskbar/Widgets.png'

import { toggleWidgets } from '../store/widgets'

export interface icon {
  name: string
  url: string
  action?: () => any
}
export const ICONS: icon[] = [{
  name: "Task Manager",
  url: taskmanager
}, {
  name: "Widgets",
  url: widget,
  action: toggleWidgets
}]
