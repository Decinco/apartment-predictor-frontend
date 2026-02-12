import { useState } from "react"
import type { Apartment } from "../data/Apartment"
import { typedKeys } from "../utils"
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
        <form onSubmit={(e) => e.preventDefault()}>
            <h3>Edit Apartment</h3>
            {typedKeys(formData).map((field) => (
                <FormField
                    key={field}
                    field={field}
                    apartment={formData}
                    onChange={handleFieldChange}
                />
            ))}
            <div style={{ marginTop: "1rem" }}>
                <button type="button" disabled={isSubmitting} onClick={handleCancel}>
                    Cancel
                </button>
                {" "}
                <button type="button" disabled={isSubmitting} onClick={handleSubmit}>
                    {isSubmitting ? "Saving..." : "Submit"}
                </button>
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
