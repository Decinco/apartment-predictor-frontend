// Solution #6: Split Components - SelectField

interface SelectFieldProps {
    label: string
    value: string
    options: readonly string[]
    onChange: (value: string) => void
}

export default function SelectField({ label, value, options, onChange }: SelectFieldProps) {
    return (
        <div>
            <label>
                {label}:{" "}
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}
