import { useEffect, useState} from "react"
import ApartmentDetail from "./ApartmentDetail"
import { type Apartment } from "../data/apartments"
import axios from "axios"
import { separateNumbers } from "../utils"
import { useInterface, useInterfaceDispatch } from "./InterfaceStatusProvider"


export default function ApartmentsView() {
    const interfaceStatus = useInterface()
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
                return apartments ? <ApartmentList apartments={apartments}/> : <p>Loading apartments...</p>
            default:
                const apartment = getApartmentFromId(interfaceStatus.selectedApartment)
                if (!apartment) return <p>Apartment not found</p>

                return <ApartmentDetail apartment={apartment}/>
        }
    }

    return (
        <>
            {getInterfaceContent()}
        </>
    )
}

function ApartmentList({apartments}: {apartments: Apartment[]}) {
    const dispatch = useInterfaceDispatch()

    if (!dispatch) return null

    return <ul>
        {
            apartments.map(apartment => {
                return <div key={apartment.id}>{apartment.name} - {apartment.bedrooms} {apartment.bedrooms > 1 ? "bedrooms" : "bedroom"} - {apartment.area} m2 - {apartment.stories} {apartment.stories > 1 ? "stories" : "story"} - {separateNumbers(apartment.price)} € {"  "}
                    <button onClick={() => dispatch({type: "view_apt", selectedApartment: apartment.id})}>
                        View
                    </button>
                    {"  "}
                    <button onClick={() => dispatch({type: "edit_apt", selectedApartment: apartment.id})}>
                        Edit
                    </button>
                </div>
            })
        }
    </ul>
}