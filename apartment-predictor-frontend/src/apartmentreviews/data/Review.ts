import type { Apartment } from "../../apartments/model/Apartment"

// Default review object for editing. Connects to an apartment automatically.
export const defaultReview: (apartment: Apartment) => Review = (apartment: Apartment) => { return {
    id: String(Math.floor(Math.random() * 99999)),
    title: "",
    contents: "",
    rating: 0,
    date: new Date(),
    apartment: apartment
}}

export interface Review {
    id: string
    title: string
    contents: string
    rating: number
    date: Date
    apartment: Apartment
}