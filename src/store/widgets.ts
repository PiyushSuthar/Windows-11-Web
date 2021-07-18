import { createStore, getValue } from 'nanostores'

export const ShowWidgetStore = createStore<boolean>(() => {
    ShowWidgetStore.set(false)
})

export const toggleWidgets = () => {
    ShowWidgetStore.set(!getValue(ShowWidgetStore))
}