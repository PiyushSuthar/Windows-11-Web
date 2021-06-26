import { createStore, getValue } from "nanostores";

export const showStartMenu = createStore<Boolean>(() => {
  showStartMenu.set(false)
})
export const toggleStartMenu = () => {
  showStartMenu.set(!getValue(showStartMenu))
}