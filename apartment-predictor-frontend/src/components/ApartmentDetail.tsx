import { IconAirConditioning, IconBath, IconBed, IconHotelService, IconParking, IconSofa, IconSquareAsterisk, IconStack, IconStairsDown, IconTemperaturePlus, type Icon } from "@tabler/icons-react"
import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils/utils"



export default function ApartmentDetail({ apartment, onStartEdit, onReturn, onDelete }: { apartment: Apartment, onStartEdit: () => void, onReturn: () => void, onDelete: (id: string, name: string) => void }) {
    return (
        <div className="flex flex-col items-center antialiased self-center pb-5">
            <div className="px-5">
                <h3 className="text-5xl font-bold italic pt-5">{apartment.name}</h3>
                <p className="text-3xl font-medium text-left self-baseline pb-5">{separateNumbers(apartment.price)} €</p>
                <div className="flex flex-col gap-3 pb-5">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconStack className="p-1" size={48}></IconStack>
                        </div>
                        <span className="text-xl"><span className="text-yellow-600 font-bold">Stories: </span>{apartment.stories}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconSquareAsterisk className="p-1" size={48} />
                        </div>
                        <span className="text-xl"><span className="text-yellow-600 font-bold">Area: </span>{apartment.area} m²</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconBed className="p-1" size={48} />
                        </div>
                        <span className="text-xl"><span className="text-yellow-600 font-bold">Bedrooms: </span>{apartment.bedrooms}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconBath className="p-1" size={48} />
                        </div>
                        <span className="text-xl"><span className="text-yellow-600 font-bold">Bathrooms: </span>{apartment.bathrooms}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconAirConditioning className="p-1" size={48} />
                        </div>
                        <span className="text-xl">{apartment.airconditioning ? <span className="text-yellow-600 font-bold">Has air conditioning</span> : <span className="font-bold">Doesn't have air conditioning</span>}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconStairsDown className="p-1" size={48} />
                        </div>
                        <span className="text-xl">{apartment.basement ? <span className="text-yellow-600 font-bold">Has a basement</span> : <span className="font-bold">Doesn't have a basement</span>}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconHotelService className="p-1" size={48} />
                        </div>
                        <span className="text-xl">{apartment.guestroom ? <span className="text-yellow-600 font-bold">Has a guest room</span> : <span className="font-bold">Doesn't have a guest room</span>}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconTemperaturePlus className="p-1" size={48} />
                        </div>
                        <span className="text-xl">{apartment.hotwaterheating ? <span className="text-yellow-600 font-bold">Has water heating</span> : <span className="font-bold">Doesn't have water heating</span>}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconParking className="p-1" size={48} />
                        </div>
                        <span className="text-xl font-bold">{apartment.parking ? <span className="text-yellow-600 font-bold">Has parking</span> : <span className="font-bold">Doesn't have parking</span>}</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-linear-to-br from-yellow-800 to-yellow-600 rounded-xl">
                            <IconSofa className="p-1" size={48}></IconSofa>
                        </div>
                        <span className="text-xl"><span className="text-yellow-600 font-bold">Furnishing status: </span>{apartment.furnishingstatus}</span>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="flex flex-row gap-4">
                <button onClick={onReturn} className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-yellow-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-yellow-800 hover:to-yellow-600">
                    Return to List
                </button>
                <button onClick={onStartEdit} className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-yellow-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-yellow-800 hover:to-yellow-600">
                    Edit
                </button>
                <button onClick={() => onDelete(apartment.id, apartment.name)} className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-red-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-red-800 hover:to-red-600">
                    Delete
                </button>
            </div>
        </div>
    )
}

function FieldStatistics({field, fieldDisplay, icon}: {field: any, fieldDisplay?: string, icon: Icon}) {
    <div className="flex flex-row gap-3 items-center">
        <div className="bg-linear-to-br from-(--accent-start) to-(--accent-end) rounded-xl">
            {icon}
        </div>
        {typeof field == "boolean" ? <span className="text-xl">{field ? <span className="text-(--title)">Has {fieldDisplay ?? field}</span> : <span className="font-bold">Doesn't have {fieldDisplay ?? field}</span>}</span> : <span className="text-xl"><span className="text-(--title) font-bold">{fieldDisplay ?? field}: </span>{field}</span>}
    </div>
}
