import { IconMoon, IconSun } from "@tabler/icons-react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"

export default function ThemeChanger() {
    const theme = useThemeContext()

    return (
        <div className="text-white">
            <button onClick={() => theme.nextTheme()}>
                {theme.currentTheme.themeName === "dark" ? <IconMoon/> : <IconSun/>}
            </button>
        </div>
    )
}