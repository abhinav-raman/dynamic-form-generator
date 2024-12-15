import { fireEvent, render } from '@testing-library/react';
import { FORM_STATE } from '../../utils/formData';
import FieldsJsonInput from './FieldsJsonInput';

describe('FieldsjsonInput', () => {
    it('should render the JSON input area', () => {
        const el = render(
            <FieldsJsonInput form={FORM_STATE} onFormChange={() => {}} />
        );
        expect(el).toBeTruthy();
    });

    it('should send the updated JSON on onFormChange click', () => {
        const formChangeHandler = vi.fn();

        const { getByTestId } = render(
            <FieldsJsonInput
                form={FORM_STATE}
                onFormChange={formChangeHandler}
            />
        );

        const button = getByTestId('form-submit-btn');
        fireEvent.click(button);

        expect(formChangeHandler).toHaveBeenCalledWith(FORM_STATE);
    });

    it('should reset the JSON to default data', () => {
        const formChangeHandler = vi.fn();

        const { getByTestId } = render(
            <FieldsJsonInput
                form={FORM_STATE}
                onFormChange={formChangeHandler}
            />
        );

        const button = getByTestId('form-reset-btn');
        fireEvent.click(button);

        expect(formChangeHandler).toHaveBeenCalledWith(FORM_STATE);
    });
});
