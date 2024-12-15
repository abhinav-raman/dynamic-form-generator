import { useState } from 'react';
import classes from './FieldsJsonInput.module.css';
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
            setError('JSON is invalid:' + String(e));
        }
    }

    function handleReset() {
        setError('');
        try {
            setValue(JSON.stringify(FORM_STATE, null, 4));
        } catch (e) {
            setError('JSON is invalid:' + String(e));
        }
        onFormChange(FORM_STATE);
    }

    return (
        <div className={classes.form_editor__wrapper}>
            <Card>
                <textarea
                    className={`${classes.form_editor__field} ${error?.length && classes.error}`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Card>
            <div className={classes.form_editor__btn_wrapper}>
                <button
                    className={`${classes.form_editor__btn} ${classes.form_editor__submit_btn}`}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    className={`${classes.form_editor__btn} ${classes.form_editor__reset_btn}`}
                    onClick={handleReset}
                >
                    Reset
                </button>
                {error && <p className={classes.form_error_message}>{error}</p>}
            </div>
        </div>
    );
};

export default FieldsJsonInput;
