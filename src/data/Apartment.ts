export const FurnishingStatus = {
    UNFURNISHED: 'Unfurnished',
    PARTIALLY_FURNISHED: 'Partially Furnished',
    FULLY_FURNISHED: 'Fully Furnished',
} as const

export type FurnishingStatusType = typeof FurnishingStatus[keyof typeof FurnishingStatus]

// Helper to get all furnishing status values as an array
export const furnishingStatusValues = Object.values(FurnishingStatus)

// Type guard to check if a value is a valid furnishing status
export function isFurnishingStatus(value: unknown): value is FurnishingStatusType {
    return typeof value === 'string' && furnishingStatusValues.includes(value as any)
}

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