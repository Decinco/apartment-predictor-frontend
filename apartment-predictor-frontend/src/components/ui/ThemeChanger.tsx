import { IconMoon, IconSun } from "@tabler/icons-react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"

export default function ThemeChanger() {
    const themeManager = useThemeContext()

    return (
        <div className="">
            <div onClick={() => themeManager.nextTheme()} className="hover:cursor-pointer bg-linear-to-br p-3 size-min from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) rounded-xl">
                {themeManager.currentTheme.themeName === "light" ? <IconMoon/> : <IconSun/>}
            </div>
        </div>
    )
}