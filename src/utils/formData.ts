import { getRandomId } from './helperFunctions';
import { FormFieldSectionType } from './types';

export const FORM_STATE: Array<FormFieldSectionType> = [
    {
        id: getRandomId(),
        sectionLabel: 'User Details',
        fields: [
            {
                id: getRandomId(),
                label: 'Full Name',
                name: 'full-name',
                type: 'text',
                placeholder: 'Enter you full name...',
            },
            {
                id: getRandomId(),
                label: 'Phone Number',
                name: 'phone-number',
                type: 'tel',
                placeholder: 'Enter you phone number...',
            },
            {
                id: getRandomId(),
                label: 'Email',
                name: 'email',
                type: 'email',
                placeholder: 'Enter you email...',
            },
            {
                id: getRandomId(),
                label: 'Age',
                name: 'age',
                type: 'range',
                min: 18,
                max: 60,
                placeholder: 'Enter you ages...',
            },
        ],
    },
    {
        id: getRandomId(),
        sectionLabel: 'Address details',
        fields: [
            {
                id: getRandomId(),
                label: 'Address',
                type: 'text',
                placeholder: 'Enter you address...',
                asTextarea: true,
            },
            {
                id: getRandomId(),
                label: 'Pincode',
                type: 'tel',
                placeholder: 'Enter pincode...',
            },
        ],
    },
];
