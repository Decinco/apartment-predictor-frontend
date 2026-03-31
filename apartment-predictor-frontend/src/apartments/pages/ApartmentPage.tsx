import { defaultApartment, type Apartment } from "../model/Apartment"
import { useState } from "react"
import MainContainer from "../../shared/components/containers/MainContainer"
import { useApi } from "../../shared/middleware/useApi"
import FormPage from "../../shared/components/forms/FormPage"
import ApartmentListPage from "./ApartmentListPage"
import ApartmentDetailsPage from "./ApartmentDetailsPage"

type ViewMode = "list" | "view" | "edit"

export default function ApartmentPage() {
    const apartments = useApi<Apartment>("apartments")
    const [viewMode, setViewMode] = useState<ViewMode>("list")
    const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null)

    const handleSubmit = async (updatedApartment: Apartment) => {
        console.log(updatedApartment)
        await apartments.update(updatedApartment)
        setViewMode("view")
    }

    const handleDeletion = async (deletedApartmentId: string, deletedApartmentName: string) => {
        const confirmation = confirm("Are you sure you want to delete " + deletedApartmentName + "?")
        if (confirmation) {
            await apartments.remove(deletedApartmentId)
            setViewMode("list")
        }
    }

    const handleView = (id?: string) => {
        // Special case during creation
        if (!id && !selectedApartmentId) {
            setViewMode("list")
            return
        }

        id && setSelectedApartmentId(id) // Going BACK to view from edit won't change the apartment we're seeing
        setViewMode("view")
    }

    const handleEdit = () => {
        setViewMode("edit")
    }

    const handleCreation = () => {
        setViewMode("edit")
        setSelectedApartmentId(null)
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

        if (!apartments.list) {
            return <p>Couldn't load Apartments</p>
        }

        let apartment

        switch (viewMode) {
            case "list":
                return <ApartmentListPage apartments={apartments.list} onView={handleView} onCreate={handleCreation} />
            case "view":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentDetailsPage apartment={apartment} onStartEdit={handleEdit} onReturn={handleBackToList} onDelete={handleDeletion} />
            case "edit":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) apartment = defaultApartment

                return <FormPage<Apartment> object={apartment} onSubmit={handleSubmit} onReturn={handleView} />
            default:
                return <p>...what?</p>
        }
    }

    return (
        <MainContainer>
            {getInterfaceContent()}
        </MainContainer>
    )
}