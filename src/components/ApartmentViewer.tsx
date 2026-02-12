import { type Apartment } from "../data/Apartment"
import { useApartments } from "../hooks/useApartments"
import ApartmentList from "./ApartmentList"
import ApartmentDetail from "./ApartmentDetail"
import ApartmentForm from "./ApartmentForm"
import { useState } from "react"

type ViewMode = "list" | "view" | "edit"

export default function ApartmentViewer() {
    const apartments = useApartments()
    const [viewMode, setViewMode] = useState<ViewMode>("list")
    const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null)

    const handleSubmit = async (updatedApartment: Apartment) => {
        await apartments.updateApartmentData(updatedApartment)
        setViewMode("view")
    }

    const handleView = (id?: string) => {
        id && setSelectedApartmentId(id) // Going BACK to view from edit won't change the apartment we're seeing
        setViewMode("view")
    }

    const handleEdit = () => {
        setViewMode("edit")
    }

    const handleBackToList = () => {
        setViewMode("list")
        setSelectedApartmentId(null)
    }

    function getApartmentFromId(id: string | null) {
        return apartments.list?.find(apartment => apartment.id === id)
    }

    function getInterfaceContent() {
        if (apartments.loading) {
            return <p>Loading apartments...</p>
        }

        if (apartments.error) {
            return (
                <div>
                    <p>Error loading apartments: {apartments.error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            )
        }

        if (!apartments.list || apartments.list.length === 0) {
            return <p>No apartments found</p>
        }

        let apartment

        switch (viewMode) {
            case "list":
                return apartments ? <ApartmentList apartments={apartments.list} onView={handleView}/> : <p>Loading apartments...</p>
            case "edit":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentDetail apartment={apartment} onStartEdit={handleEdit} onReturn={handleBackToList}/>
            case "view":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentForm apartment={apartment} onSubmit={handleSubmit} onReturn={handleView}/>
            default:
                return <p>...what?</p>
        }
    }

    return (
        <>
            {getInterfaceContent()}
        </>
    )
}