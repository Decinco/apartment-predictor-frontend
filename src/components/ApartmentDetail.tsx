import type { Apartment } from "../data/Apartment"
import { separateNumbers } from "../utils"



export default function ApartmentDetail({ apartment, onStartEdit, onReturn, onDelete }: { apartment: Apartment, onStartEdit: () => void, onReturn: () => void, onDelete: (id: string, name: string) => void}) {
    return (
        <div>
            <h3>{apartment.name}</h3>
            <div>
                <p><strong>Bedrooms:</strong> {apartment.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {apartment.bathrooms}</p>
                <p><strong>Area:</strong> {apartment.area} m²</p>
                <p><strong>Stories:</strong> {apartment.stories}</p>
                <p><strong>Price:</strong> {separateNumbers(apartment.price)} €</p>
                <p><strong>Furnishing:</strong> {apartment.furnishingstatus}</p>
                
                {apartment.guestroom && <p>✓ Guest room</p>}
                {apartment.basement && <p>✓ Basement</p>}
                {apartment.hotwaterheating && <p>✓ Hot water heating</p>}
                {apartment.airconditioning && <p>✓ Air conditioning</p>}
                {apartment.parking && <p>✓ Parking</p>}
            </div>
            
            <button onClick={onReturn}>
                Return to List
            </button>
            {" "}
            <button onClick={onStartEdit}>
                Edit
            </button>
            <button onClick={() => onDelete(apartment.id, apartment.name)}>
                Delete
            </button>
        </div>
    )
}
