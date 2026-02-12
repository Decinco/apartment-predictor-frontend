import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus } from "@tabler/icons-react"
import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils"

export default function ApartmentList({ apartments, onView, onCreate }: { apartments: Apartment[],  onView: (id?: string) => void, onCreate: () => void }) {
    return (
        <div className="flex flex-col items-center text-white antialiased pb-5">
            <h2 className="text-5xl font-bold italic text-yellow-500 p-5">Apartments</h2>
            <div className={apartments.length > 0 ? "grid grid-cols-1 md:grid-cols-4 gap-4 m-4 justify-center" : "justify-center"}>
                {apartments.length == 0 && <p className="font-bold italic">No apartments found</p>}
                {apartments.map(apartment => (
                    <ApartmentListItem key={apartment.id} apartment={apartment} onView={onView} />
                ))}
            </div>
            <button onClick={onCreate} className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-yellow-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-yellow-800 hover:to-yellow-600">Create New</button>
        </div>
    )
}

function ApartmentListItem({ apartment, onView }: { apartment: Apartment, onView: (id?: string) => void }) {
    return (
        <div className="w-sm gap-2 bg-linear-to-br from-yellow-950 to-yellow-800 hover:from-yellow-800 hover:to-yellow-600 hover:bg-white/20 hover:cursor-pointer rounded-lg p-2 hover:border-yellow-600" onClick={() => onView(apartment.id)}>
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
