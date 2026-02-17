import type { TailwindColor } from "./TailwindColor"

type Gradient = {
    gradientStart: TailwindColor
    gradientEnd: TailwindColor
}

export interface ApartmentApplicationTheme {
    themeName: string
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
