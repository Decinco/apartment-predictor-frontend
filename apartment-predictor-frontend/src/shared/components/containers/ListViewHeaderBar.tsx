import type { ReactNode } from "react";

export default function ListViewHeaderBar({ title, detail, children }: { title: string, detail: string, children?: ReactNode | ReactNode[] | undefined}) {
    return (
        <div className="flex flex-col sm:flex-row w-full items-center gap-1 sm:items-center sm:justify-between mb-2">
            <div className="flex flex-col self-baseline">
                <h2 className="text-5xl font-bold bg-linear-to-r text-(--title) bg-clip-text pb-1">
                    {title}
                </h2>
                <span>{detail}</span>
            </div>
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    )
}