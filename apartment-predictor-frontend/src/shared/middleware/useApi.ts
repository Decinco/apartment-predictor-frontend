import { useState, useEffect } from "react"
import { GenericApiAccess } from "./GenericApiAccess"



interface UseApiReturn<T> {
    list: T[] | null
    loading: boolean
    error: string | null
    update: (object: T) => Promise<void>
    refresh: () => Promise<void>
    remove: (id: string) => Promise<void>
}

export function useApi<T>(endpointCategory: string): UseApiReturn<T> {
    const [data, setData] = useState<T[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const access = new GenericApiAccess<T>(endpointCategory)

    const load = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await access.fetch()
            setData(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load apartments")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const update = async (object: T) => {
        try {
            await access.update(object)
            // Refresh the list after successful update
            await load()
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to update apartment"
            setError(errorMessage)
            throw new Error(errorMessage)
        }
    }

    const refresh = async () => {
        await load()
    }


    const remove = async (id: string) => {
        try {
            await access.remove(id)
            // Refresh the list after successful update
            await load()
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to delete apartment"
            setError(errorMessage)
            throw new Error(errorMessage)
        }
    }

    return {
        list: data,
        loading,
        error,
        update,
        refresh,
        remove
    }
}