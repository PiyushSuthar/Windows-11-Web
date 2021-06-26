import { createStore, getValue } from 'nanostores'

export const darkMode = createStore<Boolean>(() => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("dark_mode")) {
      darkMode.set(!!localStorage.getItem("dark_mode")!)

    } else {
      localStorage.setItem("dark_mode", false as any)
      darkMode.set(false)
    }
  }
})

export const toggleDarkMode = () => {
  if (typeof window !== "undefined") {
    darkMode.set(!getValue(darkMode))
    localStorage.setItem("dark_mode", !getValue(darkMode) as any)
  }
}