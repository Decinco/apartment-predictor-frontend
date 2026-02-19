import { defaultApartment, type Apartment } from "../data/Apartment"
import { useApartments } from "../hooks/useApartments"
import ApartmentList from "./ApartmentList"
import ApartmentDetail from "./ApartmentDetail"
import ApartmentForm from "./ApartmentForm"
import { useState } from "react"
import ThemeChanger from "./ui/ThemeChanger"
import { useThemeContext } from "../context/ApplicationThemeProvider"
import { tailwindColorToCssValue } from "../utils/utils"

type ViewMode = "list" | "view" | "edit"

export default function ApartmentViewer() {
    const apartments = useApartments()
    const [viewMode, setViewMode] = useState<ViewMode>("list")
    const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null)

    const theme = useThemeContext().currentTheme

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
                return <ApartmentList apartments={apartments.list} onView={handleView} onCreate={handleCreation} />
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

    const backgroundStart = tailwindColorToCssValue(theme.background.gradientStart)
    const backgroundEnd = tailwindColorToCssValue(theme.background.gradientEnd)
    const textColorGeneric = tailwindColorToCssValue(theme.text.generic)

    return (
        <div className="min-h-screen"
            style={{
                backgroundImage: `linear-gradient(to bottom right, ${backgroundStart}, ${backgroundEnd})`,
                color: textColorGeneric
            }}
        >
            <ThemeChanger></ThemeChanger>
            {getInterfaceContent()}
        </div>
    )
}