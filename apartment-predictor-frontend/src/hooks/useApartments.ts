import { useState, useEffect } from "react"
import { type Apartment } from "../data/Apartment"
import { GenericApiAccess } from "../api/GenericApiAccess"

interface UseApartmentsReturn {
    list: Apartment[] | null
    loading: boolean
    error: string | null
    updateApartmentData: (apartment: Apartment) => Promise<void>
    refreshApartments: () => Promise<void>
    deleteApartment: (id: string) => Promise<void>
    setApartments: React.Dispatch<React.SetStateAction<Apartment[] | null>>
}

export function useApartments(): UseApartmentsReturn {
    const [apartments, setApartments] = useState<Apartment[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const apartmentAccess = new GenericApiAccess<Apartment>("apartments")

    const loadApartments = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await apartmentAccess.fetch()
            setApartments(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load apartments")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadApartments()
    }, [])

    const updateApartmentData = async (apartment: Apartment) => {
        try {
            await apartmentAccess.update(apartment)
            // Refresh the list after successful update
            await loadApartments()
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to update apartment"
            setError(errorMessage)
            throw new Error(errorMessage)
        }
    }

    const refreshApartments = async () => {
        await loadApartments()
    }


    const deleteApartment = async (id: string) => {
        try {
            await apartmentAccess.remove(id)
            // Refresh the list after successful update
            await loadApartments()
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to delete apartment"
            setError(errorMessage)
            throw new Error(errorMessage)
        }
    }

    return {
        list: apartments,
        loading,
        error,
        updateApartmentData,
        refreshApartments,
        deleteApartment,
        setApartments
    }
}