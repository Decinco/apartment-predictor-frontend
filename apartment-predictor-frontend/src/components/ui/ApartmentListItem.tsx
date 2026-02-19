import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus } from "@tabler/icons-react";
import type { Apartment } from "../../data/Apartment";
import { separateNumbers } from "../../utils/utils";

export default function ApartmentListItem({ apartment, onView }: { apartment: Apartment, onView: (id?: string) => void }) {
    return (
        <div className="w-sm gap-2 bg-linear-to-br from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) hover:cursor-pointer rounded-lg p-2" onClick={() => onView(apartment.id)}>
            <div className="flex flex-row border-b items-end">
                <div className="basis-3/4 truncate">
                    <strong className="font-bold text-2xl">{apartment.name}</strong>
                </div>
                <div className="basis-1/4 items-end text-right">
                    <p className="font-mono italic text-sm">{separateNumbers(apartment.price)} €</p>
                </div>
            </div>
            <div className="flex flex-row pt-3 pb-1 divide-x-2">
                <div className="grid grid-cols-2 size-1/2 gap-y-4">
                    <div className="flex flex-row gap-1">
                        <IconStack className="color" />
                        <span>{apartment.stories}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <IconSquareAsterisk />
                        <span>{apartment.area} m²</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <IconBed />
                        <span>{apartment.bedrooms}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <IconBath />
                        <span>{apartment.stories}</span>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap gap-3 place-items-center items-center place-content-center w-1/2 text-center">
                    {apartment.airconditioning && <IconAirConditioning></IconAirConditioning>}
                    {apartment.basement && <IconStairsDown></IconStairsDown>}
                    {apartment.guestroom && <IconHotelService/>}
                    {apartment.hotwaterheating && <IconTemperaturePlus/>}
                    {apartment.parking && <IconParking/>}
                    {apartment.furnishingstatus != "Unfurnished" && <IconSofa/>}
                    {apartment.furnishingstatus === "Unfurnished" && !apartment.airconditioning && !apartment.basement && !apartment.guestroom && !apartment.hotwaterheating && !apartment.parking && <p className="text-sm font-bold italic">No additional features</p>}
                </div>
            </div>
        </div>
    )
}