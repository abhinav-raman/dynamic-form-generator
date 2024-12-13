import { HTMLInputTypeAttribute } from "react";

export type FormFieldSectionType = {
    sectionLabel: string;
    fields: Array<FormFieldType>
}
export type FormFieldType = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    type: HTMLInputTypeAttribute
    asTextarea?: boolean
}