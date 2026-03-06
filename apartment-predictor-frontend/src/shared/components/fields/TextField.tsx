// Solution #6: Split Components - TextField

interface TextFieldProps {
    label: string
    type: "text" | "number"
    value: string | number
    onChange: (value: string) => void
}

export default function TextField({ label, type, value, onChange }: TextFieldProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <label className="text-xl text-(--title) font-bold capitalize">
                {label}
            </label>
            <input className="appearance-none w-full px-4 py-2 text-lg text-(--text) font-normal ring-(--accent-start) ring-2 rounded-lg bg-(--field-bg)/60 hover:bg-(--field-bg) focus:bg-(--field-bg) disabled:bg-(--field-bg)/20 disabled:text-(--text)/40 transition"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={label === "id" || label === "price"}
            />
        </div>
    )
}
