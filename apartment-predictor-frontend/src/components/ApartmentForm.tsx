import { useState } from "react"
import type { Apartment } from "../data/Apartment"
import { typedKeys } from "../utils/utils"
import TextField from "./fields/TextField"
import CheckboxField from "./fields/CheckboxField"
import SelectField from "./fields/SelectField"
import { furnishingStatusValues, isFurnishingStatus } from "../data/Apartment"

export default function ApartmentForm({ apartment, onSubmit, onReturn }: { apartment: Apartment, onSubmit: (apartment: Apartment) => Promise<void>, onReturn: (id?: string) => void }) {
    const [formData, setFormData] = useState<Apartment>(apartment)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFieldChange = (field: keyof Apartment, value: any) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        try {
            await onSubmit(formData)
            onReturn(formData.id)
        } catch (err) {
            console.error("Error submitting form:", err)
            alert("Failed to update apartment. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        onReturn()
    }

    return (
        <form className="flex flex-col items-center text-white antialiased self-center pb-5" onSubmit={(e) => e.preventDefault()}>
            <div className="px-5">
                <h3 className="text-5xl font-bold italic text-yellow-500 pt-5">Edit Apartment</h3>
                {typedKeys(formData).map((field) => (
                    <div className="py-2">
                        <FormField
                            key={field}
                            field={field}
                            apartment={formData}
                            onChange={handleFieldChange}
                        />
                    </div>
                ))}
                <div className="flex flex-row gap-4 mt-4">
                    <button className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-yellow-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-yellow-800 hover:to-yellow-600" type="button" disabled={isSubmitting} onClick={handleSubmit}>
                        {isSubmitting ? "Saving..." : "Submit"}
                    </button>
                    <button className="inset-ring-4 rounded-lg hover:cursor-pointer py-2 px-6 inset-ring-red-800 font-bold hover:inset-ring-0 hover:bg-linear-to-br hover:from-red-800 hover:to-red-600" type="button" disabled={isSubmitting} onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

function FormField({ field, apartment, onChange }: {
    field: keyof Apartment
    apartment: Apartment
    onChange: (field: keyof Apartment, value: any) => void
}) {
    const value = apartment[field]

    if (field === 'furnishingstatus' && isFurnishingStatus(value)) {
        return (
            <SelectField
                label={field}
                value={value}
                options={furnishingStatusValues}
                onChange={(newValue) => onChange(field, newValue)}
            />
        )
    }

    if (typeof value === "number") {
        return (
            <TextField
                label={field}
                type="number"
                value={value}
                onChange={(newValue) => onChange(field, parseFloat(newValue))}
            />
        )
    }

    if (typeof value === "string") {
        return (
            <TextField
                label={field}
                type="text"
                value={value}
                onChange={(newValue) => onChange(field, newValue)}
            />
        )
    }

    if (typeof value === "boolean") {
        return (
            <CheckboxField
                label={field}
                checked={value}
                onChange={(checked) => onChange(field, checked)}
            />
        )
    }

    // Skip undefined/unimplemented fields
    if (value === undefined) {
        return null
    }

    return <p>{field}: Unimplemented type</p>
}
