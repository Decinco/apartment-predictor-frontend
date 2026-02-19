import { useState } from "react"
import type { ApartmentApplicationTheme } from "../data/ApartmentApplicationTheme"
import { Themes } from "../data/Themes"

export interface UseThemeHook {
    currentTheme: ApartmentApplicationTheme
    changeTheme: (themeName: string) => void
    nextTheme: () => void
}

export function useTheme(): UseThemeHook {
    const [ currentTheme, setCurrentTheme ] = useState<ApartmentApplicationTheme>(Themes.dark)

    const themes = Object.values(Themes) // Turns into list for easier filtering
    
    const changeTheme = (themeName: string) => {
        const newTheme = themes.find((theme) => {
            theme.themeName === themeName
        })
        newTheme && setCurrentTheme(newTheme)
    }

    const nextTheme = () => {
        const currentThemeId = themes.findIndex((theme) => theme.themeName === currentTheme.themeName)
        const newTheme = currentThemeId < themes.length - 1 ? themes[currentThemeId + 1] : themes[0]

        console.log(newTheme)

        newTheme && setCurrentTheme(newTheme)
    }

    return {
        currentTheme,
        changeTheme,
        nextTheme
    }
}