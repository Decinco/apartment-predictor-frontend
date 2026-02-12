// Solution #6: Split Components - CheckboxField

interface CheckboxFieldProps {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export default function CheckboxField({ label, checked, onChange }: CheckboxFieldProps) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                {label}
            </label>
        </div>
    )
}
