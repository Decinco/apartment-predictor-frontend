import type { Apartment } from "../data/Apartment"
import ApartmentListItem from "./ui/ApartmentListItem"
import Button from "./ui/Button"

export default function ApartmentList({ apartments, onView, onCreate }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void }) {
    return (
        <div className="flex flex-col items-center antialiased pb-5">
            <h2 className="text-5xl font-bold italic text-(--title) p-5">Apartments</h2>
            <div className={apartments.length > 0 ? "grid grid-cols-1 md:grid-cols-4 gap-4 m-4 justify-center" : "justify-center"}>
                {apartments.length == 0 && <p className="font-bold italic">No apartments found</p>}
                {apartments.map(apartment => (
                    <ApartmentListItem key={apartment.id} apartment={apartment} onView={onView} />
                ))}
            </div>
            <Button text="Create New" onClick={onCreate}></Button>
        </div>
    )
}


