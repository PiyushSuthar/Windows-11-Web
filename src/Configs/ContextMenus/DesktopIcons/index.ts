import { ContextItem } from "../../../Components/ContextMenu";
import { openApp, togglePinApp } from "../../../store/activeWindow";

export const ThisPC_CTX_MENU: ContextItem[] = [
    {
        text: "Open",
        onClick: () => openApp("this-pc")
    }, {
        text: "Pin to Quick access",
    }, {
        text: "Manage"
    }, {
        text: "Pin to Start",
        divideNext: true,
        onClick: () => togglePinApp("this-pc")
    }, {
        text: "Map network drive...",
    }, {
        text: "Disconnect network drive...",
        divideNext: true
    }, {
        text: "Create shortcut"
    }, {
        text: "Delete",
    }, {
        text: "Rename",
        divideNext: true
    }, {
        text: "Properties"
    }
]

export const Recycle_BIN_CTX_MENU: ContextItem[] = [
    {
        text: "Open",
        onClick: () => openApp("recycle-bin")
    }, {
        text: "Empty Recycle Bin",
    }, {
        text: "Pin to Quick access",
        divideNext: true
    }, {
        text: "Create shortcut"
    }, {
        text: "Rename",
        divideNext: true
    }, {
        text: "Properties"
    }
]

export const ControlPanel_CTX_MENU: ContextItem[] = [
    {
        text: "Open",
        divideNext: true,
        onClick: () => openApp("control-panel")
    }, {
        text: "Create shortcut"
    }, {
        text: "Delete",
    }
]