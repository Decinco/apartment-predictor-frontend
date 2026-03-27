import type { Icon } from "@tabler/icons-react";

export default function ApartmentFieldStatistics({ field, fieldDisplay, icon: IconComponent }: { field: any, fieldDisplay?: string, icon: Icon }) {
    return (<div className="flex flex-row gap-3 items-center">
        <div className="shadow-lg shadow-(color:--text)/15 bg-linear-to-br from-(--accent-start) to-(--accent-end) rounded-xl">
            <IconComponent className="p-1" size={48} />
        </div>
        {typeof field == "boolean" ? <span className="text-xl">{field ? <span className="font-bold text-(--title)">Has {fieldDisplay ?? field}</span> : <span className="">Doesn't have {fieldDisplay ?? field}</span>}</span> : <span className="text-xl"><span className="text-(--title) font-bold">{fieldDisplay ?? field}: </span>{field}</span>}
    </div>)
}