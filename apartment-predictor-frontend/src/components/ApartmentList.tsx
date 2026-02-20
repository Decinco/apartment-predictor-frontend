import { IconHomePlus } from "@tabler/icons-react"
import type { Apartment } from "../data/Apartment"
import ApartmentListItem from "./ui/ApartmentListItem"
import { IconButton } from "./ui/Button"

export default function ApartmentList({ apartments, onView, onCreate }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void }) {
    return (
        <div className="m-2 rounded-xl bg-(--text)/10 px-3 flex flex-col items-center antialiased pt-2 pb-3 mx-7">
            <div className="flex flex-col sm:flex-row w-full items-center gap-1 sm:items-center sm:justify-between mb-2">
                <div className="flex flex-col self-baseline">
                    <h2 className="text-5xl font-bold bg-linear-to-r text-(--title) bg-clip-text pb-1">
                        Apartments
                    </h2>
                    <span> {apartments.length} found</span>
                </div>
                <IconButton icon={IconHomePlus} size={24} onClick={onCreate}></IconButton>
            </div>
            <div className={apartments.length > 0 ? "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 y-4 justify-center" : "justify-center"}>
                {apartments.length == 0 && <p className="font-bold italic">No apartments found</p>}
                {apartments.map(apartment => (
                    <ApartmentListItem key={apartment.id} apartment={apartment} onView={onView} />
                ))}
            </div>
        </div>
    )
}


