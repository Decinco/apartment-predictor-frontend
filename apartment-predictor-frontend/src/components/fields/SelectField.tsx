// Solution #6: Split Components - SelectField

interface SelectFieldProps {
    label: string
    value: string
    options: readonly string[]
    onChange: (value: string) => void
}

export default function SelectField({ label, value, options, onChange }: SelectFieldProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <label className="text-xl text-yellow-600 font-bold capitalize">
                {label}
            </label>
            <select className="appearance-none w-full px-4 py-2 text-lg text-white font-normal ring-yellow-600 ring-2 rounded-lg bg-yellow-950/60 hover:bg-yellow-950 focus:bg-yellow-950 disabled:bg-yellow-900/20 disabled:text-gray-300 cursor-pointer"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
