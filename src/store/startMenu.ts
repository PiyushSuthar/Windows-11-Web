import { createStore, getValue } from "nanostores";

export const showStartMenu = createStore<Boolean>(() => {
  showStartMenu.set(false)
})
export const toggleStartMenu = () => {
  getValue(showStartMenu)
    ? setTimeout(() => {
        showStartMenu.set(false);
      }, 150)
    : showStartMenu.set(true);
};
export const closeStartMenu = () => {
  showStartMenu.set(false);
};
