import { type Apartment } from "../data/apartments";
import type { InterfaceMode } from "./ApartmentsView";

export default function ApartmentDetail({ apartment, viewMode: defaultState }: { apartment: Apartment | undefined, viewMode: InterfaceMode }) {
    return (<>
        {defaultState == "Editing" && apartment && <ApartmentDetailEdit {...apartment} />}
        {defaultState == "Viewing" && apartment && <ApartmentDetailView {...apartment} />}
    </>)
}

function ApartmentDetailView(apartment: Apartment) {
    return (
        <>
            <h3>{apartment.name}</h3>
            <p>Bedrooms: {apartment.bedrooms}</p>
            <p>Area: {apartment.area} m2</p>
            <p>Stories: {apartment.stories}</p>
            <p>Price: {apartment.price}€</p>
        </>
    )
}

function ApartmentDetailEdit(apartment: Apartment) {
    return (
        <>
            <p>Name: {apartment.name}</p>
            <p>Bedrooms: {apartment.bedrooms}</p>
            <p>Area: {apartment.area} m2</p>
            <p>Stories: {apartment.stories}</p>
            <p>Price: {apartment.price}€</p>
        </>
    )
}