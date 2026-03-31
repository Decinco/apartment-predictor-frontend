import type { ReactNode } from "react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"
import TopBar from "./MainTopBar"

export default function MainContainer({children}: {children: ReactNode | ReactNode[]}) {
    const theme = useThemeContext().currentTheme

    return (
        <div className="transition p-5 min-h-screen bg-linear-to-br from-(--bg-start) to-(--bg-end) text-(--text)"
            style={theme.vars as React.CSSProperties}
        >
            <TopBar/>
            {children}
        </div>
    )
}