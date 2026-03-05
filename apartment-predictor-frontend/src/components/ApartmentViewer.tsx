import { defaultApartment, type Apartment } from "../data/Apartment"
import { useApartments } from "../hooks/useApartments"
import ApartmentList, { sortTypes, type SortTypes } from "./ApartmentList"
import ApartmentDetail from "./ApartmentDetail"
import ApartmentForm from "./ApartmentForm"
import { useState } from "react"
import MainContainer from "./ui/MainContainer"

type ViewMode = "list" | "view" | "edit"

export default function ApartmentViewer() {
    const apartments = useApartments()
    const [viewMode, setViewMode] = useState<ViewMode>("list")
    const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null)

    const handleSubmit = async (updatedApartment: Apartment) => {
        console.log(updatedApartment)
        await apartments.updateApartmentData(updatedApartment)
        setViewMode("view")
    }

    const handleDeletion = async (deletedApartmentId: string, deletedApartmentName: string) => {
        const confirmation = confirm("Are you sure you want to delete " + deletedApartmentName + "?")
        if (confirmation) {
            await apartments.deleteApartment(deletedApartmentId)
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

    const handleSort = (sortType: SortTypes) => {
        switch (sortType) {
            case "atoz": apartments.setApartments(apartments.list?.sort((a, b) => a.name.localeCompare(b.name)) ?? null); return;
            case "ztoa": apartments.setApartments(apartments.list?.sort((a, b) => -1 * a.name.localeCompare(b.name)) ?? null); return;
            case "cheap": apartments.setApartments(apartments.list?.sort((a, b) => b.price - a.price) ?? null); return;
            case "expensive": apartments.setApartments(apartments.list?.sort((a, b) => a.price - b.price) ?? null); return;
            case "featureful": apartments.setApartments(apartments.list?.sort((a, b) => countApartmentFeatures(a) - countApartmentFeatures(b)) ?? null); return;
            case "featureless": apartments.setApartments(apartments.list?.sort((a, b) => countApartmentFeatures(b) - countApartmentFeatures(a)) ?? null); return;
        }
    }

    function countApartmentFeatures (apartment: Apartment): number {
        let features = 0

        features += (apartment.basement ? 1 : 0)
        features += (apartment.airConditioning ? 1 : 0)
        features += (apartment.guestroom ? 1 : 0)
        features += (apartment.parking ? 1 : 0)
        features += (apartment.waterHeating ? 1 : 0)
        features += (apartment.furnishingStatus != "Unfurnished" ? 1 : 0)

        return features
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
                return <ApartmentList apartments={apartments.list} onView={handleView} onCreate={handleCreation} onSort={handleSort} />
            case "view":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentDetail apartment={apartment} onStartEdit={handleEdit} onReturn={handleBackToList} onDelete={handleDeletion} />
            case "edit":
                apartment = getApartmentFromId(selectedApartmentId)
                if (!apartment) apartment = defaultApartment

                return <ApartmentForm apartment={apartment} onSubmit={handleSubmit} onReturn={handleView} />
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