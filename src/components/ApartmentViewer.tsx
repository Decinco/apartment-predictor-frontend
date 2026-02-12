import { type Apartment } from "../data/Apartment"
import { useInterface } from "./InterfaceStatusProvider"
import { useApartments } from "../hooks/useApartments"
import ApartmentList from "./ApartmentList"
import ApartmentDetail from "./ApartmentDetail"
import ApartmentForm from "./ApartmentForm"


export default function ApartmentViewer() {
    const interfaceStatus = useInterface()
    const apartments = useApartments()

    const onSubmit = async (updatedApartment: Apartment) => {
        try {
            await apartments.updateApartmentData(updatedApartment)
            console.log("Apartment successfully updated")
        } catch (err) {
            console.error("Failed to submit apartment update:", err)
        }
    }

    function getApartmentFromId(id: string | undefined) {
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

        switch (interfaceStatus.mode) {
            case "Listing":
                return apartments ? <ApartmentList apartments={apartments.list}/> : <p>Loading apartments...</p>
            case "Editing":
                apartment = getApartmentFromId(interfaceStatus.apartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentDetail apartment={apartment}/>
            case "Viewing":
                apartment = getApartmentFromId(interfaceStatus.apartmentId)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentForm apartment={apartment} onSubmit={onSubmit}/>
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