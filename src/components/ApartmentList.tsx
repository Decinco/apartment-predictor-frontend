import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils"
import { useInterfaceDispatch } from "./InterfaceStatusProvider"

export default function ApartmentList({ apartments }: { apartments: Apartment[] }) {
    const dispatch = useInterfaceDispatch()

    if (!dispatch) return null

    return (
        <div>
            <h2>Apartments</h2>
            <ul>
                {apartments.map(apartment => (
                    <ApartmentListItem key={apartment.id} apartment={apartment} />
                ))}
            </ul>
        </div>
    )
}

function ApartmentListItem({ apartment }: { apartment: Apartment }) {
    const dispatch = useInterfaceDispatch()

    if (!dispatch) return null

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
                <button onClick={() => dispatch({ type: "view_apt", selectedApartment: apartment.id })}>
                    View
                </button>
            </div>
        </li>
    )
}