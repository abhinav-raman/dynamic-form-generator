import { useState } from 'react';
import { FormFieldSectionType } from '../../utils/types';
import Card from '../Card/Card';
import { FORM_STATE } from '../../utils/formData';

const FieldsJsonInput = ({
    form,
    onFormChange,
}: {
    form: FormFieldSectionType[];
    onFormChange: (val: FormFieldSectionType[]) => void;
}) => {
    const [value, setValue] = useState(JSON.stringify(form, null, 4));
    const [error, setError] = useState('');

    function handleSubmit() {
        setError('');
        try {
            onFormChange(JSON.parse(value));
        } catch (e) {
            setError('JSON is invalid: ' + String(e));
        }
    }

    function handleReset() {
        setError('');
        try {
            setValue(JSON.stringify(FORM_STATE, null, 4));
        } catch (e) {
            setError('JSON is invalid: ' + String(e));
        }
        onFormChange(FORM_STATE);
    }

    return (
        <div className="w-1/2 flex flex-col gap-4 items-stretch box-border">
            <Card>
                <textarea
                    className={`w-full h-full resize-vertical box-border p-3 rounded-xl border ${
                        error?.length ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Card>
            <div className="flex items-center gap-4">
                <button
                    className="px-4 py-2 text-lg font-semibold bg-green-100 text-green-600 border border-green-600 rounded-md hover:bg-green-200 active:bg-green-300 transition-all"
                    onClick={handleSubmit}
                    data-testid="form-submit-btn"
                >
                    Submit
                </button>
                <button
                    className="px-4 py-2 text-lg font-semibold bg-red-100 text-red-600 border border-red-600 rounded-md hover:bg-red-200 active:bg-red-300 transition-all"
                    onClick={handleReset}
                    data-testid="form-reset-btn"
                >
                    Reset
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </div>
        </div>
    );
};

export default FieldsJsonInput;
