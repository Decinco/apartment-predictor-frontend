import type { ReactNode } from "react"
import { useThemeContext } from "../context/ApplicationThemeProvider"
import ThemeChanger from "./buttons/ThemeChanger"

export default function MainContainer({children}: {children: ReactNode | ReactNode[ ]}) {
    const theme = useThemeContext().currentTheme


    return (
        <div className="transition p-5 min-h-screen bg-linear-to-br from-(--bg-start) to-(--bg-end) text-(--text)"
            style={theme.vars as React.CSSProperties}
        >
            <div className="relative flex flex-row justify-between md:justify-center rounded-xl bg-(--text)/10 p-3 items-center">
                <h2 className="cursor-default text-(--title) decoration-2 italic decoration-double underline-offset-4 decoration-(--text) underline font-bold text-4xl text-center self-center">Apartment Predictor</h2>
                <div className="md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2">
                    <ThemeChanger></ThemeChanger>
                </div>
            </div>
            {children}
        </div>
    )
}