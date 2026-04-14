import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus, type Icon } from "@tabler/icons-react";
import type { Apartment } from "../../shared/model/Apartment";
import { separateNumbers } from "../../shared/utils/utils";

export default function ApartmentCard({ item, onView }: { item: Apartment, onView: (id?: string) => void }) {
    return (
        <div className="transition hover:-translate-y-0.5 duration-75 w-full shadow-(color:--text)/15 hover:shadow-md gap-2 bg-linear-to-br from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) hover:cursor-pointer rounded-lg p-2" onClick={() => onView(item.id)}>
            <div className="flex flex-row border-b items-end">
                <div className="basis-4/6 truncate">
                    <strong className="font-bold text-2xl">{item.name}</strong>
                </div>
                <div className="basis-2/6 items-end text-right">
                    <p className="font-mono italic text-sm">{separateNumbers(item.price)} €</p>
                </div>
            </div>
                <p className="text-xs italic">{item.location}</p>
                <div className="grid grid-cols-2 py-4 gap-y-4">
                    <ApartmentListFeature field={item.stories} icon={IconStack} text="story" textPlural="stories" />
                    <ApartmentListFeature field={item.area} icon={IconSquareAsterisk} text="m2"/>
                    <ApartmentListFeature field={item.bedrooms} icon={IconBed} text="bed" textPlural="beds" />
                    <ApartmentListFeature field={item.bathrooms} icon={IconBath} text="bath" textPlural="baths" />
                </div>
                <div className="bg-(--text)/15 rounded-md py-1 flex flex-row flex-wrap gap-3 place-items-center items-center place-content-center text-center">
                    {item.airConditioning && <IconAirConditioning></IconAirConditioning>}
                    {item.basement && <IconStairsDown></IconStairsDown>}
                    {item.guestroom && <IconHotelService/>}
                    {item.waterHeating && <IconTemperaturePlus/>}
                    {item.parking && <IconParking/>}
                    {item.furnishingStatus != "Unfurnished" && <IconSofa/>}
                    {item.furnishingStatus === "Unfurnished" && !item.airConditioning && !item.basement && !item.guestroom && !item.waterHeating && !item.parking && <p className="text-sm font-bold italic">No additional features</p>}
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