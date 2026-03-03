// Solution #6: Split Components - CheckboxField

interface CheckboxFieldProps {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export default function CheckboxField({ label, checked, onChange }: CheckboxFieldProps) {
    return (
        <div className="flex flex-row gap-4 items-start md:items-center">
            <label className="text-xl text-(--title) font-bold capitalize">
                {label}
            </label>
            <input className="my-2 w-6 h-6 accent-(--checkmark) bg-(--text) border-(--accent-start) rounded cursor-pointer transition"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
        </div>
    )
}
