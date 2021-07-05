import { createStore } from 'nanostores'
import { App, AppsConfig } from '../Configs/apps.config'

type Apps = keyof typeof AppsConfig

export const OpenApps = createStore<Record<Apps | string, boolean>>(() => {
    OpenApps.set({
        "file-explorer": false,
        "ms-store": false,
        edge: false
    })
})

export const ActiveApp = createStore<Apps>(() => {
    ActiveApp.set("edge")
})