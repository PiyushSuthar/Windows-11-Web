import { ContextItem } from "../../Components/ContextMenu";

export const FileContextMenu: ContextItem[] = [
    {
        text: "Open",
    },
    {
        text: "Open in new window"
    },
    {
        text: "Pin to Quick access",
    },
    {
        text: "Open in Windows Terminal"
    }, {
        text: "Open in Visual Studio",
    }, {
        text: "Scan with Microsoft Defender",
        divideNext: true
    }, {
        text: "Give access to",
        subitems: [],
    },
    {
        text: "Restore previous versions",
    }, {
        text: "Include in library",
        subitems: [],
    }, {
        text: "Pin to Start"
    }, {
        text: "Copy as path",
        divideNext: true
    }, {
        text: "Send to",
        divideNext: true
    }, {
        text: "Cut"
    }, { text: "Copy", divideNext: true },
    { text: "Create shortcut" }, {
        text: "Delete",
    },
    { text: "Rename", divideNext: true }, {
        text: "Properties"
    }]
