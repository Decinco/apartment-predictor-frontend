import type { TailwindColor } from "./TailwindColor"

function cssVar(color: `--color-${TailwindColor}`): string {
  return `var(${color})`
}

export interface ApartmentApplicationTheme {
  themeName: string
  vars: Record<string, string>
}

export const Themes: ApartmentApplicationTheme[] = [
  {
    themeName: "dark",
    vars: {
      "--bg-start":                         cssVar("--color-taupe-900"),
      "--bg-end":                           cssVar("--color-taupe-800"),
      "--text":                             cssVar("--color-white"),
      "--title":                            cssVar("--color-yellow-500"),
      "--form-label":                       cssVar("--color-yellow-600"),
      "--accent-start":                     cssVar("--color-yellow-950"),
      "--accent-end":                       cssVar("--color-yellow-800"),
      "--accent-hover-start":               cssVar("--color-yellow-800"),
      "--accent-hover-end":                 cssVar("--color-yellow-600"),
      "--border-regular":                   cssVar("--color-yellow-800"),
      "--accent-hover-destructive-start":   cssVar("--color-red-800"),
      "--accent-hover-destructive-end":     cssVar("--color-red-600"),
      "--border-destructive":               cssVar("--color-red-800"),
      "--field-border":                     cssVar("--color-yellow-600"),
      "--field-bg":                         cssVar("--color-yellow-950"),
      "--checkmark":                        cssVar("--color-yellow-600"),
    }
  },
  {
    themeName: "light",
    vars: {
      "--bg-start":                         cssVar("--color-taupe-200"),
      "--bg-end":                           cssVar("--color-taupe-300"),
      "--text":                             cssVar("--color-black"),
      "--title":                            cssVar("--color-yellow-500"),
      "--form-label":                       cssVar("--color-yellow-600"),
      "--accent-start":                     cssVar("--color-yellow-950"),
      "--accent-end":                       cssVar("--color-yellow-800"),
      "--accent-hover-start":               cssVar("--color-yellow-800"),
      "--accent-hover-end":                 cssVar("--color-yellow-600"),
      "--border-regular":                   cssVar("--color-yellow-800"),
      "--accent-hover-destructive-start":   cssVar("--color-red-800"),
      "--accent-hover-destructive-end":     cssVar("--color-red-600"),
      "--border-destructive":               cssVar("--color-red-800"),
      "--field-border":                     cssVar("--color-yellow-600"),
      "--field-bg":                         cssVar("--color-yellow-950"),
      "--checkmark":                        cssVar("--color-yellow-600"),
    }
  }
]