import { useState } from "react";
import { possibleFurnishingStates, type Apartment } from "../data/Apartment";
import { useInterface, useInterfaceDispatch } from "./InterfaceStatusProvider";
import { typedKeys } from "../utils";

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
        {interfaceStatus.mode == "Editing" && <ApartmentDetailEdit {...apartmentData} />}
        {interfaceStatus.mode == "Viewing" && <ApartmentDetailView {...apartmentData} />}
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
        <form>
            {typedKeys(apartment).map((key) => {
                return <ApartmentEditFormField key={key} field={key} apartment={apartment}/>
            })}
        </form>
    )
}

function ApartmentEditFormField({field, apartment}: {field: keyof Apartment, apartment: Apartment}) {
    const fieldType = typeof apartment[field]

    // Si es un valor enumerado
    if (possibleFurnishingStates.contains(apartment[field])) {
        return <DropdownField field={field} apartment={apartment} values={possibleFurnishingStates.values}></DropdownField>
    }

    // Si no entra en tipos de valor enumerados
    switch (fieldType) {
        case "number": return <GenericFormField field={field} apartment={apartment} type="number"></GenericFormField>
        case "string": return <GenericFormField field={field} apartment={apartment} type="string"></GenericFormField>
        case "boolean": return <CheckboxField field={field} apartment={apartment}></CheckboxField>
        default: return <p>{field}: Unimplemented</p>
    }
}

function GenericFormField({field, apartment, type}: {field: keyof Apartment, apartment: Apartment, type: string}) {
    return (
        <>
            {field + ": "}
            <input 
                defaultValue={String(apartment[field])}
                type={type}
            />
            <br/>
        </>
    )
}

function CheckboxField({field, apartment}: {field: keyof Apartment, apartment: Apartment}) {
    return (
        <>
            {field + ": "}
            <input 
                defaultChecked={Boolean(apartment[field])}
                type="checkbox"
            />
            <br/>
        </>
    )
}

function DropdownField({field, apartment, values}: {field: keyof Apartment, apartment: Apartment, values: string[]}) {
    return (
        <>
            {field + ": "}
            <select
                value={String(apartment[field]) ?? "none"}
            >
                {values.map((item) => {
                return <option value={item}>{item}</option>;
                })}
            </select>
            <br />
        </>
    )
}