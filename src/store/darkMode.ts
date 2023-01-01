import { createStore, getValue } from "nanostores"

type themeType = "light" | "dark"

const LOCAL_KEY = "theme"

export const ThemeStore = createStore<themeType>(() => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(LOCAL_KEY)) {
      const localTheme = localStorage.getItem(LOCAL_KEY)! as themeType
      ThemeStore.set(localTheme)
      document.documentElement.setAttribute("data-theme", localTheme)
    } else {
      localStorage.setItem(LOCAL_KEY, "light")
      document.documentElement.setAttribute("data-theme", "light")
      ThemeStore.set("light")
    }
  }
})

export const toggleTheme = () => {
  if (typeof window !== "undefined") {
    const newTheme: themeType = getValue(ThemeStore) === "light" ? "dark" : "light"
    ThemeStore.set(newTheme)
    localStorage.setItem(LOCAL_KEY, newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }
}