import axios from "axios"

const API_BASE_URL = "https://apiapartmentpredictor.decin.co/aptPredictor/v1"

// Opted for a class structure to avoid having to specify the endpoint every time
export class GenericApiAccess<T> {
    apiUrl: string;

    constructor(name: string) {
        this.apiUrl = name
    }

    async fetch(): Promise<T[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/${this.apiUrl}`)
            console.log(this.apiUrl + "s fetched:", response.data)
            return response.data as T[]
        } catch (err) {
            const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
            console.error("Error fetching " + this.apiUrl + "s: ", errorMessage)
            throw new Error(errorMessage)
        }
    }

    async update(object: T): Promise<T> {
        try {
            const response = await axios.put(
                `${API_BASE_URL}/${this.apiUrl}/update`, 
                object
            )
            console.log(this.apiUrl + " updated:", response.data)
            return response.data as T
        } catch (err) {
            const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
            console.error("Error updating " + this.apiUrl + ": ", errorMessage)
            throw new Error(errorMessage)
        }
    }

    async remove(id: string): Promise<void> {
        try {
            const response = await axios.delete(
                `${API_BASE_URL}/${this.apiUrl}/delete/${id}`
            )
            console.log(this.apiUrl + " deleted:", response.data)
        } catch (err) {
            const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
            console.error("Error deleting " + this.apiUrl + ": ", errorMessage)
            throw new Error(errorMessage)
        }
    }
}