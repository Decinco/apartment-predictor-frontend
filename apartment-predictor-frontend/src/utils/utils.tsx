import type { TailwindColor } from "../data/TailwindColor";

export function separateNumbers (num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function typedKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export function tailwindColorToCssValue(color: TailwindColor) {
    if (color === "transparent" || color === "inherit" || color === "current") {
        return color
    }

    return `var(--color-${color})`
}