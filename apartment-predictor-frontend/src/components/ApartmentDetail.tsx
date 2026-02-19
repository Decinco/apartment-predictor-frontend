import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus, type Icon } from "@tabler/icons-react"
import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils/utils"
import Button from "./ui/Button"



export default function ApartmentDetail({ apartment, onStartEdit, onReturn, onDelete }: { apartment: Apartment, onStartEdit: () => void, onReturn: () => void, onDelete: (id: string, name: string) => void }) {
    return (
        <div className="flex flex-col items-center antialiased self-center pb-5">
            <div className="px-5">
                <h3 className="text-5xl text-(--title) font-bold italic pt-5">{apartment.name}</h3>
                <p className="text-3xl font-medium text-left self-baseline pb-5">{separateNumbers(apartment.price)} €</p>
                <div className="flex flex-col gap-3 pb-5">
                    <FieldStatistics field={apartment.stories} fieldDisplay="Stories" icon={IconStack} />
                    <FieldStatistics field={apartment.area} fieldDisplay="Area" icon={IconSquareAsterisk} />
                    <FieldStatistics field={apartment.bedrooms} fieldDisplay="Bedrooms" icon={IconBed} />
                    <FieldStatistics field={apartment.bathrooms} fieldDisplay="Bathrooms" icon={IconBath} />
                    <FieldStatistics field={apartment.airconditioning} fieldDisplay="air conditioning" icon={IconAirConditioning} />
                    <FieldStatistics field={apartment.basement} fieldDisplay="a basement" icon={IconStairsDown} />
                    <FieldStatistics field={apartment.guestroom} fieldDisplay="a guest room" icon={IconHotelService} />
                    <FieldStatistics field={apartment.hotwaterheating} fieldDisplay="water heating" icon={IconTemperaturePlus} />
                    <FieldStatistics field={apartment.parking} fieldDisplay="parking" icon={IconParking} />
                    <FieldStatistics field={apartment.furnishingstatus} fieldDisplay="Furnishing Status" icon={IconSofa} />
                </div>
            </div>
            <div>
            </div>
            <div className="flex flex-row gap-4">
                <Button text="Return to List" onClick={onReturn} />
                <Button text="Edit" onClick={onStartEdit} />
                <Button text="Delete" type="destructive" onClick={() => onDelete(apartment.id, apartment.name)} />
            </div>
        </div>
    )
}

function FieldStatistics({ field, fieldDisplay, icon: IconComponent }: { field: any, fieldDisplay?: string, icon: Icon }) {
    return (<div className="flex flex-row gap-3 items-center">
        <div className="bg-linear-to-br from-(--accent-start) to-(--accent-end) rounded-xl">
            <IconComponent className="p-1" size={48} />
        </div>
        {typeof field == "boolean" ? <span className="text-xl">{field ? <span className="font-bold text-(--title)">Has {fieldDisplay ?? field}</span> : <span className="">Doesn't have {fieldDisplay ?? field}</span>}</span> : <span className="text-xl"><span className="text-(--title) font-bold">{fieldDisplay ?? field}: </span>{field}</span>}
    </div>)
}
