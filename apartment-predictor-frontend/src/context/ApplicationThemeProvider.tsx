import { createContext, type ReactNode } from "react";
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



