import type { ApartmentApplicationTheme } from "./ApartmentApplicationTheme";

const dark: ApartmentApplicationTheme = {
    themeName: "dark",
    background: {
        gradientStart: "slate-950",
        gradientEnd: "slate-700"
    },
    filledElements: {
        normal: {
            gradientStart: "yellow-950",
            gradientEnd: "yellow-800"
        },
        hover: {
            gradientStart: "yellow-800",
            gradientEnd: "yellow-600"
        }
    },
    buttons: {
        regular: {
            border: "yellow-800",
            hoverFill: {
                gradientStart: "yellow-800",
                gradientEnd: "yellow-600"
            }
        },
        destructive: {
            border: "red-800",
            hoverFill: {
                gradientStart: "red-800",
                gradientEnd: "red-600"
            }
        }
    },
    text: {
        title: "yellow-500",
        generic: "white",
        formLabel: "yellow-600"
    },
    form: {
        field: {
            border: "yellow-600",
            background: {
                normal: "yellow-950",
                hover: "yellow-950",
                focus: "yellow-950",
                unavailableOpacity: 20
            }
        },
        checkmarkFill: "yellow-600"
    }
}

const light: ApartmentApplicationTheme = {
    themeName: "light",
    background: {
        gradientStart: "slate-100",
        gradientEnd: "slate-400"
    },
    filledElements: {
        normal: {
            gradientStart: "yellow-950",
            gradientEnd: "yellow-800"
        },
        hover: {
            gradientStart: "yellow-800",
            gradientEnd: "yellow-600"
        }
    },
    buttons: {
        regular: {
            border: "yellow-800",
            hoverFill: {
                gradientStart: "yellow-800",
                gradientEnd: "yellow-600"
            }
        },
        destructive: {
            border: "red-800",
            hoverFill: {
                gradientStart: "red-800",
                gradientEnd: "red-600"
            }
        }
    },
    text: {
        title: "yellow-500",
        generic: "black",
        formLabel: "yellow-600"
    },
    form: {
        field: {
            border: "yellow-600",
            background: {
                normal: "yellow-950",
                hover: "yellow-950",
                focus: "yellow-950",
                unavailableOpacity: 20
            }
        },
        checkmarkFill: "yellow-600"
    }
} 

export const Themes = {
    dark,
    light
}