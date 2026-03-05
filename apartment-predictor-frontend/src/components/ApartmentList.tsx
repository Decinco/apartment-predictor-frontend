import { IconHomePlus, IconList } from "@tabler/icons-react"
import type { Apartment } from "../data/Apartment"
import ApartmentCard from "./ui/ApartmentListItem"
import { IconButton } from "./ui/Button"
import { useState } from "react"

export const sortTypes = [
    "atoz",
    "ztoa",
    "cheap",
    "expensive",
    "featureful",
    "featureless"
] as const

export type SortTypes = typeof sortTypes[number]

export default function ApartmentList({ apartments, onView, onCreate, onSort }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void, onSort: (sortType: SortTypes) => void}) {
    const [ currentSort, updateCurrentSort ] = useState<"nothing" | SortTypes>("nothing")
    
    function nextSortType(): SortTypes {   
        console.log(currentSort)
        
        if (currentSort == "nothing") {
            updateCurrentSort("atoz")
            return "atoz"
        }

        const currentIndex = sortTypes.indexOf(currentSort)
        const newIndex = currentIndex == length - 1 ? 0 : currentIndex + 1

        updateCurrentSort(sortTypes[newIndex])

        return sortTypes[newIndex]
    }

    return (
        <div className="mt-2 rounded-xl bg-(--text)/10 px-3 flex flex-col items-center antialiased pt-2 pb-3">
            <div className="flex flex-col sm:flex-row w-full items-center gap-1 sm:items-center sm:justify-between mb-2">
                <div className="flex flex-col self-baseline">
                    <h2 className="text-5xl font-bold bg-linear-to-r text-(--title) bg-clip-text pb-1">
                        Apartments
                    </h2>
                    <span> {apartments.length} found</span>
                </div>
                <div className="flex gap-2">
                    <IconButton icon={IconHomePlus} size={24} onClick={onCreate}></IconButton>
                    <IconButton icon={IconList} size={24} onClick={() => onSort(nextSortType())}></IconButton>
                </div>
            </div>
            <div className={apartments.length > 0 ? "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 y-4 justify-center" : "justify-center"}>
                {apartments.length == 0 && <p className="font-bold italic">No apartments found</p>}
                {apartments.map(apartment => (
                    <ApartmentCard key={apartment.id} apartment={apartment} onView={onView} />
                ))}
            </div>
        </div>
    )
}


