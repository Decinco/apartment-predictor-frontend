import type { ReactNode } from "react";

interface GriddableCardArgs {
    key: React.Key | null | undefined
    item: any
    onView: (id?: string) => void
}

type GriddableCard = ({key, item, onView}: GriddableCardArgs) => ReactNode

export default function ListViewCardGrid({card: Card, list, onView}: {card: GriddableCard, list: any[], onView: (id?: string) => void}) {
    return(
        <div className={list.length > 0 ? "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 y-4 justify-center" : "justify-center"}>
            {list.length == 0 && <p className="font-bold italic">No apartments found</p>}
            {list.map(item => (
                <Card key={item.id} item={item} onView={onView}/>
            ))}
        </div>
    )
}