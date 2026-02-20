import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus } from "@tabler/icons-react";
import type { Apartment } from "../../data/Apartment";
import { separateNumbers } from "../../utils/utils";

export default function ApartmentListItem({ apartment, onView }: { apartment: Apartment, onView: (id?: string) => void }) {
    return (
        <div className="w-full shadow-lg shadow-(color:--text)/15 hover:shadow-md gap-2 bg-linear-to-br from-(--accent-start) to-(--accent-end) hover:from-(--accent-hover-start) hover:to-(--accent-hover-end) hover:cursor-pointer rounded-lg p-2" onClick={() => onView(apartment.id)}>
            <div className="flex flex-row border-b items-end">
                <div className="basis-3/4 truncate">
                    <strong className="font-bold text-2xl">{apartment.name}</strong>
                </div>
                <div className="basis-1/4 items-end text-right">
                    <p className="font-mono italic text-sm">{separateNumbers(apartment.price)} €</p>
                </div>
            </div>
                <div className="grid grid-cols-2 py-4 gap-y-4">
                    <div className="flex flex-row gap-1 items-center">
                        <div className="rounded-md bg-(--text)/30 p-1 mr-2">
                            <IconStack />
                        </div>
                        <span>{apartment.stories} {apartment.stories == 1 ? "story" : "stories"}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className="rounded-md bg-(--text)/30 p-1 mr-2">
                            <IconSquareAsterisk />
                        </div>
                        <span>{apartment.area} m² of space</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className="rounded-md bg-(--text)/30 p-1 mr-2">
                            <IconBed />
                        </div>
                        <span>{apartment.bedrooms} {apartment.bedrooms == 1 ? "bedroom" : "bedrooms"}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className="rounded-md bg-(--text)/30 p-1 mr-2">
                            <IconBath />
                        </div>
                        <span>{apartment.bathrooms} {apartment.bathrooms == 1 ? "bathroom" : "bathrooms"}</span>
                    </div>
                </div>
                <div className="bg-(--text)/30 rounded-md py-1 flex flex-row flex-wrap gap-3 place-items-center items-center place-content-center text-center">
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