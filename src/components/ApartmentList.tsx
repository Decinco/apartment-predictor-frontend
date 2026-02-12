import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils"

export default function ApartmentList({ apartments, onView, onCreate }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void }) {
    return (
        <div>
            <h2>Apartments</h2>
            <ul>
                {apartments.map(apartment => (
                    <ApartmentListItem key={apartment.id} apartment={apartment} onView={onView} />
                ))}
            </ul>
            <button onClick={onCreate}>Create</button>
        </div>
    )
}

function ApartmentListItem({ apartment, onView }: { apartment: Apartment, onView: (id?: string) => void }) {
    return (
        <li style={{ listStyle: "none" }}>
            <div>
                <strong>{apartment.name}</strong>
                {" - "}
                {apartment.bedrooms} {apartment.bedrooms > 1 ? "bedrooms" : "bedroom"}
                {" - "}
                {apartment.area} m²
                {" - "}
                {apartment.stories} {apartment.stories > 1 ? "stories" : "story"}
                {" - "}
                {separateNumbers(apartment.price)} €
                {" "}
                <button onClick={() => onView(apartment.id)}>
                    View
                </button>
            </div>
        </li>
    )
}