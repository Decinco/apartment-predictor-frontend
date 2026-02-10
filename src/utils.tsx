export function separateNumbers (num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function typedKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

// Permite construir un tipo similar a un Enum de Java a partir de una lista de valores.
export function enumFromValues<const T extends string[]>(values: T) {
  return {
    values,
    // Con esta función, se pueden revisar si un valor dado existe en la enumeración.
    contains(value: unknown): value is T[number] {
      return typeof value === "string" && values.includes(value as T[number]);
    },
  };
}
