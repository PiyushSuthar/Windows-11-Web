import { createStore, getValue } from "nanostores";

export const showActionCenter = createStore<Boolean>(() => {
    showActionCenter.set(false)
})
export const toggleActionCenter = () => {
    getValue(showActionCenter)
        ? setTimeout(() => {
            showActionCenter.set(false);
        }, 150)
        : showActionCenter.set(true);
};
export const closeActionCenter = () => {
    showActionCenter.set(false);
};
