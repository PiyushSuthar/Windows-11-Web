/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_VERIF_CODE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}