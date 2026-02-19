import type { ReactNode } from "react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"

export default function MainContainer({children}: {children: ReactNode | ReactNode[ ]}) {
    const theme = useThemeContext().currentTheme


    return (
        <div className="min-h-screen bg-linear-to-br from-(--bg-start) to-(--bg-end) text-(--text)"
            style={theme.vars as React.CSSProperties}
        >
            {children}
        </div>
    )
}