import { ContextItem } from "../../Components/ContextMenu";

export const defaultContextMenuConfig: ContextItem[] = [
    {
        text: "View",
        subitems: [{
            text: "Extra large icons",
        }, {
            text: "Large icons",
        }, {
            text: "Medium icons",
        }, {
            text: "Small icons",
        }, {
            text: "List",
        }, {
            text: "Details",
        }, {
            text: "Tiles",
        }, {
            text: "Content"
        }]
    },
    {
        text: "Sort by",
        divideNext: true,
        subitems: [{
            text: "Name",
        }, {
            text: "Date",
        }, {
            text: "Type",
        }, {
            text: "Size",
        }, {
            text: "Tags",
            divideNext: true,
        }, {
            text: "Ascending",
        }, {
            text: "Descending",
            divideNext: true,
        }, {
            text: "More..."
        }]
    },
    {
        text: "Next desktop Background",
    },
    {
        text: "Paste Shortcut",
        isDisabled: true
    },
    {
        text: "New Item",
        divideNext: true,
        // Will add more items later
        subitems: [{
            text: "Folder",
        }, {
            text: "File",
        }]
    },
    {
        text: "Display settings",
    },
    {
        text: "Personalize",
        divideNext: true
    },
    {
        text: "Open in Windows Terminal",
        divideNext: true
    },
    {
        text: "Show more options",
    }

]