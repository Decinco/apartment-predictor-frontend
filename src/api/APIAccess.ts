import axios from "axios"
import type { Apartment } from "../data/Apartment"

const API_BASE_URL = "http://decin.co:5053/aptPredictor/v1"

export async function fetchApartments(): Promise<Apartment[]> {
    try {
        const response = await axios.get(`${API_BASE_URL}/apartments`)
        console.log("Apartments fetched:", response.data)
        return response.data as Apartment[]
    } catch (err) {
        const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
        console.error("Error fetching apartments:", errorMessage)
        throw new Error(errorMessage)
    }
}

export async function updateApartment(apartment: Apartment): Promise<Apartment> {
    try {
        const response = await axios.put(
            `${API_BASE_URL}/apartments/update/${apartment.id}`, 
            apartment
        )
        console.log("Apartment updated:", response.data)
        return response.data as Apartment
    } catch (err) {
        const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
        console.error("Error updating apartment:", errorMessage)
        throw new Error(errorMessage)
    }
}