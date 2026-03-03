import { IconMoon, IconSun } from "@tabler/icons-react"
import { useThemeContext } from "../../context/ApplicationThemeProvider"

export default function ThemeChanger() {
    const themeManager = useThemeContext()

    return (
        <div className="">
            <div onClick={() => themeManager.nextTheme()} className="transition shadow-(color:--text)/15 hover:shadow-md hover:cursor-pointer bg-linear-to-br p-3 size-min from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) rounded-lg">
                {themeManager.currentTheme.themeName === "light" ? <IconMoon/> : <IconSun/>}
            </div>
        </div>
    )
}