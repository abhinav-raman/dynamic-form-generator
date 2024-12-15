import { render, screen } from '@testing-library/react';
import { FORM_STATE } from '../../utils/formData';
import DynamicForm from './DynamicForm';
import { FormFieldSectionType } from '../../utils/types';

describe('DynamicForm', () => {
    it('renders the form based on JSON data', () => {
        const el = render(<DynamicForm form={FORM_STATE} />);
        expect(el).toBeTruthy();
    });

    const updatedData: FormFieldSectionType[] = [
        ...FORM_STATE,
        {
            id: 'test-id',
            sectionLabel: 'Test section',
            fields: [
                {
                    id: 'test-field-id',
                    'data-testid': 'test-field-id',
                    label: 'Test form field',
                    type: 'text',
                },
            ],
        },
    ];

    it('renders the updated form when JSON data changes', () => {
        render(<DynamicForm form={updatedData} />);
        const el = screen.getByTestId('test-field-id');
        expect(el).toBeTruthy();
    });
});
