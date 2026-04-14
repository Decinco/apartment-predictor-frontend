import { useState } from "react"
import type ApiObject from "../../model/ApiObject"
import { typedKeys } from "../../utils/utils"
import Button from "../buttons/Button"
import { furnishingStatusValues, isFurnishingStatus } from "../../model/Apartment"
import SelectField from "../fields/SelectField"
import TextField from "../fields/TextField"
import CheckboxField from "../fields/CheckboxField"

export default function FormPage<T extends ApiObject>({ object, onSubmit, onReturn }: { object: T, onSubmit: (object: T) => Promise<void>, onReturn: (id?: string) => void }) {
    const [formData, setFormData] = useState<T>(object)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFieldChange = (field: keyof T, value: any) => {
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
        <form className="flex flex-col items-center text-(--text) antialiased self-center pb-5" onSubmit={(e) => e.preventDefault()}>
            <div className="px-5">
                <h3 className="text-5xl font-bold italic text-(--title) pt-5">Edit Apartment</h3>
                {typedKeys(formData).map((field) => (
                    <div className="py-2">
                        <FormField
                            key={String(field)}
                            field={field}
                            apartment={formData}
                            onChange={handleFieldChange}
                        />
                    </div>
                ))}
                <div className="flex flex-row gap-4 mt-4">
                    <Button text={isSubmitting ? "Saving..." : "Submit"} onClick={handleSubmit} />
                    <Button type="destructive" text="Cancel" onClick={handleCancel} />
                </div>
            </div>
        </form>
    )
}

function FormField<T>({ field, apartment, onChange }: {
    field: keyof T
    apartment: T
    onChange: (field: keyof T, value: any) => void
}) {
    const value = apartment[field]

    if (field === 'furnishingStatus' && isFurnishingStatus(value)) {
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
                label={String(field)}
                type="number"
                value={value}
                onChange={(newValue) => onChange(field, parseFloat(newValue))}
            />
        )
    }

    if (typeof value === "string") {
        return (
            <TextField
                label={String(field)}
                type="text"
                value={value}
                onChange={(newValue) => onChange(field, newValue)}
            />
        )
    }

    if (typeof value === "boolean") {
        return (
            <CheckboxField
                label={String(field)}
                checked={value}
                onChange={(checked) => onChange(field, checked)}
            />
        )
    }

    // Skip undefined/unimplemented fields
    if (value === undefined) {
        return null
    }

    return <p>{String(field)}: Unimplemented type</p>
}
