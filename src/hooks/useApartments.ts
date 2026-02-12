import { useState, useEffect } from "react"
import { fetchApartments, updateApartment } from "../api/APIAccess"
import type { Apartment } from "../data/Apartment"

interface UseApartmentsReturn {
    list: Apartment[] | null
    loading: boolean
    error: string | null
    updateApartmentData: (apartment: Apartment) => Promise<void>
    refreshApartments: () => Promise<void>
}

export function useApartments(): UseApartmentsReturn {
    const [apartments, setApartments] = useState<Apartment[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const loadApartments = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await fetchApartments()
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
            await updateApartment(apartment)
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

    return {
        list: apartments,
        loading,
        error,
        updateApartmentData,
        refreshApartments
    }
}