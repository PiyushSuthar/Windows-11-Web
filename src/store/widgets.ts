import { createStore, getValue } from 'nanostores'
import { showStartMenu } from './startMenu'

export const ShowWidgetStore = createStore<boolean>(() => {
    ShowWidgetStore.set(false)
})

export const toggleWidgets = () => {
    getValue(ShowWidgetStore) ? setTimeout(() => {
        ShowWidgetStore.set(false)
    }, 150) : ShowWidgetStore.set(true)
}

export const hideWidgets = () => {
    ShowWidgetStore.set(false)
}