import { HTMLInputTypeAttribute } from 'react';

export type FormFieldSectionType = {
    id: string;
    sectionLabel: string;
    fields: Array<FormFieldType>;
};
export type FormFieldType = React.InputHTMLAttributes<HTMLInputElement> & {
    "data-testid"?: string;
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
};
