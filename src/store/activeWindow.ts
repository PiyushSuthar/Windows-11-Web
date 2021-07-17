import { createStore, getValue } from 'nanostores'
import { App, AppsConfig } from '../Configs/apps.config'

type Apps = keyof typeof AppsConfig

// export const OpenApps = createStore<Record<Apps | string, boolean>>(() => {
//     OpenApps.set({
//         "file-explorer": false,
//         "ms-store": false,
//         edge: false
//     })
// })
export const OpenApps = createStore<App>(() => {
    OpenApps.set(AppsConfig)
})

export const ActiveApp = createStore<Apps>(() => {
    ActiveApp.set("edge")
})

export const openApp = (app_id: string) => {
    let apps = getValue(OpenApps)
    OpenApps.set({
        ...apps,
        [app_id]: {
            ...apps[app_id],
            isActive: true
        }
    })
}

export const togglePinApp = (app_id: string) => {
    let apps = getValue(OpenApps)
    let isPinned = apps[app_id].pinned
    OpenApps.set({
        ...apps,
        [app_id]: {
            ...apps[app_id],
            pinned: !isPinned
        }
    })
}