import { FormFieldSectionType } from "./types";

export const FORM_STATE: Array<FormFieldSectionType> = [
    {
        sectionLabel: "User Details",
        fields: [
            {
                label: "Full Name",
                name: "full-name",
                type: "text",
                placeholder: "Enter you full name...",
            },
            {
                label: "Phone Number",
                name: "phone-number",
                type: "tel",
                placeholder: "Enter you phone number...",
            },
            {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter you email...",
            },
            {
                label: "Age",
                name: "age",
                type: "range",
                min: 18,
                max: 60,
                placeholder: "Enter you ages...",
            },
        ],
    },
    {
        sectionLabel: "Address details",
        fields: [
            {
                label: "Address",
                type: "text",
                placeholder: "Enter you address...",
                asTextarea: true,
            },
            {
                label: "Pincode",
                type: "tel",
                placeholder: "Enter pincode...",
            },
        ],
    }
]