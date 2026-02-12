// Solution #6: Split Components - TextField

interface TextFieldProps {
    label: string
    type: "text" | "number"
    value: string | number
    onChange: (value: string) => void
}

export default function TextField({ label, type, value, onChange }: TextFieldProps) {
    return (
        <div>
            <label>
                {label}:{" "}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </div>
    )
}
