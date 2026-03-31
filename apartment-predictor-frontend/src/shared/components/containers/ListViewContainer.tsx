import type { ReactNode } from "react";

export default function ListViewContainer({children}: {children: ReactNode | ReactNode[]}) {
    return (
        <div className="mt-2 rounded-xl bg-(--text)/10 px-3 flex flex-col items-center antialiased pt-2 pb-3">
            {children}
        </div>
    )
}