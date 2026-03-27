import { createContext, useContext, type ReactNode } from "react";
import { useTheme, type UseThemeHook } from "../hooks/useTheme";


const ThemeContext = createContext<UseThemeHook | null>(null)

export default function ApplicationThemeProvider({children}: {children: ReactNode | ReactNode[ ]}) {
    const themeData = useTheme()

    return (
        <ThemeContext value={themeData}>
            {children}
        </ThemeContext>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext)

    if (!context) {
        console.error("No theme data! Using default")
        return useTheme()
    }

    return context
}



