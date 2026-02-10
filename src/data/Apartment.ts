import { enumFromValues } from "../utils";

export const possibleFurnishingStates = enumFromValues([
    "Unfurnished",
    "Partially Furnished",
    "Fully Furnished",
]);

type ApartmentFurnishingStatus = typeof possibleFurnishingStates

export interface Apartment {
    id: string
    name: string
    price: number
    area: number
    bedrooms: number
    bathrooms: number
    stories: number
    guestroom?: boolean
    basement?: boolean
    hotwaterheating?: boolean
    airconditioning?: boolean
    parking?: boolean
    furnishingstatus: ApartmentFurnishingStatus
}