export default function Button ({text, type, onClick}: {text: string,type?: "regular" | "destructive", onClick: () => void}){
    const buttonType = type == "destructive" ? "inset-ring-(--border-destructive) hover:from-(--accent-hover-destructive-start) hover:to-(--accent-hover-destructive-end)" : "inset-ring-(--border-regular) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end)"

    return <button onClick={() => onClick()} className={`inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 font-bold hover:inset-ring-0 hover:bg-linear-to-br ${buttonType}`}>{text}</button>
}