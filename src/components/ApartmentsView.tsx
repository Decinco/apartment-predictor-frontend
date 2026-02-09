import { useEffect, useState} from "react"
import ApartmentDetail from "./ApartmentDetail"
import { type Apartment } from "../data/apartments"
import axios from "axios"
import { separateNumbers } from "../utils"

export type InterfaceMode = "Listing" | "Viewing" | "Editing"

interface InterfaceStatus {
    mode: InterfaceMode
    selectedApartment?: string 
}

export default function ApartmentsView() {
    const [interfaceStatus, setInterfaceStatus] = useState<InterfaceStatus>({mode: "Listing"})
    const [apartments, setApartments] = useState<Apartment[] | null>(null)

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await axios.get("http://decin.co:5053/aptPredictor/v1/apartments")
                console.log("Apartments fetched:", response.data)
                setApartments(response.data)
            } catch (err) {
                const errorMessage = axios.isAxiosError(err) ? err.message : "Unknown error"
                console.error("Error fetching apartments:", errorMessage)
            }
        }

        fetchApartments()
    }, [])

    function getApartmentFromId(id: string | undefined) {
        return apartments?.filter(apartment => apartment.id == id)[0]
    }

    function getInterfaceContent() {
        switch (interfaceStatus.mode) {
            case "Listing":
                return apartments ? <ApartmentList apartments={apartments} setInterfaceStatus={setInterfaceStatus}/> : <p>Loading apartments...</p>
            default:
                return <ApartmentDetail apartment={getApartmentFromId(interfaceStatus.selectedApartment)} viewMode={interfaceStatus.mode}/>
        }
    }

    return (
        <>
            {getInterfaceContent()}
        </>
    )
}

function ApartmentList({setInterfaceStatus, apartments}: {setInterfaceStatus: Function, apartments: Apartment[]}) {
    return <ul>
        {
            apartments.map(apartment => {
                return <div key={apartment.id}>{apartment.name} - {apartment.bedrooms} {apartment.bedrooms > 1 ? "bedrooms" : "bedroom"} - {apartment.area} m2 - {apartment.stories} {apartment.stories > 1 ? "stories" : "story"} - {separateNumbers(apartment.price)} € {"  "}
                    <button onClick={() => setInterfaceStatus({mode: "Viewing", selectedApartment: apartment.id})}>
                        View
                    </button>
                    {"  "}
                    <button onClick={() => setInterfaceStatus({mode: "Editing", selectedApartment: apartment.id})}>
                        Edit
                    </button>
                </div>
            })
        }
    </ul>
}