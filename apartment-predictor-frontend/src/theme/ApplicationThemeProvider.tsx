import { createContext } from "react";
import type { TailwindColor } from "./TailwindColor";

type Gradient = {
    gradientStart: TailwindColor
    gradientEnd: TailwindColor
}

interface ApartmentApplicationTheme {
    background: Gradient
    filledElements: {
        normal: Gradient
        hover: Gradient
    }
    buttons: {
        regular: {
            border: TailwindColor
            hoverFill: Gradient
        }
        destructive: {
            border: TailwindColor
            hoverFill: Gradient
        }
    }
    text: {
        title: TailwindColor
        generic: TailwindColor
        formLabel: TailwindColor
    }
    form: {
        field: {
            border: TailwindColor
            background: {
                normal: TailwindColor
                hover: TailwindColor
                focus: TailwindColor
                unavailableOpacity: number
            }
        }
        checkmarkFill: TailwindColor
    }
}

const dark: ApartmentApplicationTheme = {
    background: {
        gradientStart: ""
    }
}

const ThemeContext = createContext<ApartmentApplicationTheme>(dark)

