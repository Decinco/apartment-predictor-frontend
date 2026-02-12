export const FurnishingStatus = {
    UNFURNISHED: 'Unfurnished',
    PARTIALLY_FURNISHED: 'Partially Furnished',
    FULLY_FURNISHED: 'Fully Furnished',
} as const

export type FurnishingStatusType = typeof FurnishingStatus[keyof typeof FurnishingStatus]

// Helper to get all furnishing status values as an array
export const furnishingStatusValues = Object.values(FurnishingStatus)

export function isFurnishingStatus(value: unknown): value is FurnishingStatusType {
    return typeof value === 'string' && furnishingStatusValues.includes(value as any)
}

// Default apartment object for editing
export const defaultApartment: Apartment = {id: String(Math.floor(Math.random() * 99999)), name: '', area: 0, bedrooms: 0, bathrooms: 0, stories: 0, guestroom: false, basement: false, hotwaterheating: false, airconditioning: false, parking: false, furnishingstatus: FurnishingStatus.UNFURNISHED, price: 0 }

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
    furnishingstatus: FurnishingStatusType
}