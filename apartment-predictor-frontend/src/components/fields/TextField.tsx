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
            <label className="text-xl text-yellow-600 font-bold capitalize">
                {label}
            </label>
            <input className="appearance-none w-full px-4 py-2 text-lg text-white font-normal ring-yellow-600 ring-2 rounded-lg bg-yellow-950/60 hover:bg-yellow-950 focus:bg-yellow-950 disabled:bg-yellow-900/20 disabled:text-gray-300"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={label === "id" || label === "price"}
            />
        </div>
    )
}
