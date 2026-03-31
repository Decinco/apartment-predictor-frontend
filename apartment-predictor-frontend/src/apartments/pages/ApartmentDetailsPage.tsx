import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconMapPin, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus } from "@tabler/icons-react"
import type { Apartment } from "../model/Apartment"
import { separateNumbers } from "../../shared/utils/utils"
import Button from "../../shared/components/buttons/Button"
import ApartmentFieldStatistics from "../components/ApartmentFieldStatistics"
import ListViewContainer from "../../shared/components/containers/ListViewContainer"



export default function ApartmentDetailsPage({ apartment, onStartEdit, onReturn, onDelete }: { apartment: Apartment, onStartEdit: () => void, onReturn: () => void, onDelete: (id: string, name: string) => void }) {
    return (
        <ListViewContainer>
            <div className="px-5">
                <h3 className="text-5xl text-(--title) font-bold italic pt-5">{apartment.name}</h3>
                <p className="text-3xl font-medium text-left self-baseline pb-5">{separateNumbers(apartment.price)} €</p>
                <div className="flex flex-col gap-3 pb-5">
                    {apartment.description}
                    <ApartmentFieldStatistics field={apartment.location} fieldDisplay="Location" icon={IconMapPin} />
                    <ApartmentFieldStatistics field={apartment.stories} fieldDisplay="Stories" icon={IconStack} />
                    <ApartmentFieldStatistics field={apartment.area} fieldDisplay="Area" icon={IconSquareAsterisk} />
                    <ApartmentFieldStatistics field={apartment.bedrooms} fieldDisplay="Bedrooms" icon={IconBed} />
                    <ApartmentFieldStatistics field={apartment.bathrooms} fieldDisplay="Bathrooms" icon={IconBath} />
                    <ApartmentFieldStatistics field={apartment.airConditioning} fieldDisplay="air conditioning" icon={IconAirConditioning} />
                    <ApartmentFieldStatistics field={apartment.basement} fieldDisplay="a basement" icon={IconStairsDown} />
                    <ApartmentFieldStatistics field={apartment.guestroom} fieldDisplay="a guest room" icon={IconHotelService} />
                    <ApartmentFieldStatistics field={apartment.waterHeating} fieldDisplay="water heating" icon={IconTemperaturePlus} />
                    <ApartmentFieldStatistics field={apartment.parking} fieldDisplay="parking" icon={IconParking} />
                    <ApartmentFieldStatistics field={apartment.furnishingStatus} fieldDisplay="Furnishing Status" icon={IconSofa} />
                </div>
            </div>
            <div>
            </div>
            <div className="flex flex-row gap-4">
                <Button text="Return to List" onClick={onReturn} />
                <Button text="Edit" onClick={onStartEdit} />
                <Button text="Delete" type="destructive" onClick={() => onDelete(apartment.id, apartment.name)} />
            </div>
        </ListViewContainer>
    )
}
