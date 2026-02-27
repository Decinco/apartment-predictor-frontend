import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus, type Icon } from "@tabler/icons-react";
import type { Apartment } from "../../data/Apartment";
import { separateNumbers } from "../../utils/utils";

export default function ApartmentListItem({ apartment, onView }: { apartment: Apartment, onView: (id?: string) => void }) {
    return (
        <div className="transition hover:-translate-y-0.5 duration-75 w-full shadow-(color:--text)/15 hover:shadow-md gap-2 bg-linear-to-br from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) hover:cursor-pointer rounded-lg p-2" onClick={() => onView(apartment.id)}>
            <div className="flex flex-row border-b items-end">
                <div className="basis-4/6 truncate">
                    <strong className="font-bold text-2xl">{apartment.name}</strong>
                </div>
                <div className="basis-2/6 items-end text-right">
                    <p className="font-mono italic text-sm">{separateNumbers(apartment.price)} €</p>
                </div>
            </div>
                <div className="grid grid-cols-2 py-4 gap-y-4">
                    <ApartmentListFeature field={apartment.stories} icon={IconStack} text="story" textPlural="stories" />
                    <ApartmentListFeature field={apartment.area} icon={IconSquareAsterisk} text="m2"/>
                    <ApartmentListFeature field={apartment.bedrooms} icon={IconBed} text="bed" textPlural="beds" />
                    <ApartmentListFeature field={apartment.bathrooms} icon={IconBath} text="bath" textPlural="baths" />
                </div>
                <div className="bg-(--text)/15 rounded-md py-1 flex flex-row flex-wrap gap-3 place-items-center items-center place-content-center text-center">
                    {apartment.airconditioning && <IconAirConditioning></IconAirConditioning>}
                    {apartment.basement && <IconStairsDown></IconStairsDown>}
                    {apartment.guestroom && <IconHotelService/>}
                    {apartment.hotwaterheating && <IconTemperaturePlus/>}
                    {apartment.parking && <IconParking/>}
                    {apartment.furnishingstatus != "Unfurnished" && <IconSofa/>}
                    {apartment.furnishingstatus === "Unfurnished" && !apartment.airconditioning && !apartment.basement && !apartment.guestroom && !apartment.hotwaterheating && !apartment.parking && <p className="text-sm font-bold italic">No additional features</p>}
                </div>
        </div>
    )
}

function ApartmentListFeature({field, icon: Icon, text, textPlural}: {field: number, icon: Icon, text: string, textPlural?: string}) {
    const finalText = field == 1 ? text : textPlural ?? text

    return (
        <div className="flex flex-row gap-1 items-center">
            <div className="rounded-md bg-(--text)/15 p-1 mr-2">
                <Icon />
            </div>
            <span>{field} {finalText}</span>
        </div>
    )
}