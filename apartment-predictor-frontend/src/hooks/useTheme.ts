import { useState } from "react"
import { Themes, type ApartmentApplicationTheme } from "../data/Themes"

export interface UseThemeHook {
    currentTheme: ApartmentApplicationTheme
    changeTheme: (themeName: string) => void
    nextTheme: () => void
}

export function useTheme(): UseThemeHook {
    const [ currentTheme, setCurrentTheme ] = useState<ApartmentApplicationTheme>(Themes[0])
    
    const changeTheme = (themeName: string) => {
        const newTheme = Themes.find((theme) => {
            theme.themeName === themeName
        })
        newTheme && setCurrentTheme(newTheme)
    }

    const nextTheme = () => {
        const currentThemeId = Themes.findIndex((theme) => theme.themeName === currentTheme.themeName)
        const newTheme = currentThemeId < Themes.length - 1 ? Themes[currentThemeId + 1] : Themes[0]

        console.log(newTheme)

        newTheme && setCurrentTheme(newTheme)
    }

    return {
        currentTheme,
        changeTheme,
        nextTheme
    }
}