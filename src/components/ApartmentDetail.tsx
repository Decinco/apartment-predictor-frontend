import { useState } from "react";
import { type Apartment } from "../data/apartments";
import { useInterface, useInterfaceDispatch } from "./InterfaceStatusProvider";

export default function ApartmentDetail({ apartment }: { apartment: Apartment }) {
    const [ apartmentData, setApartmentData ] = useState<Apartment>(apartment)
    const dispatch = useInterfaceDispatch()
    const interfaceStatus = useInterface()

    const onEdit = (fieldName: string, value: any) => {
        setApartmentData({
            ...apartmentData,
            [fieldName]: value
        })
    }

    if (!dispatch) return null
    
    return (<>
        <button onClick={() => dispatch({type: "list_apt"})}>Return to List</button>
        {interfaceStatus.mode == "Editing" && apartment && <ApartmentDetailEdit {...apartmentData} />}
        {interfaceStatus.mode == "Viewing" && apartment && <ApartmentDetailView {...apartmentData} />}
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