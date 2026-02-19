import { IconMoon, IconSun } from "@tabler/icons-react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"

export default function ThemeChanger() {
    const themeManager = useThemeContext()

    return (
        <div>
            <button onClick={() => themeManager.nextTheme()}>
                {themeManager.currentTheme.themeName === "light" ? <IconMoon/> : <IconSun/>}
            </button>
        </div>
    )
}