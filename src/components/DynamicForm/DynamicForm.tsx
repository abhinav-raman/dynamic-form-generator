import { useReducer } from 'react';
import { FormFieldType } from '../../utils/types';
import classes from './DynamicForm.module.css';
import { formReducer, formInitialState } from '../../reducers/FormReducer';

type DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};

const DynamicForm = () => {
    const [formState, dispatch] = useReducer(formReducer, formInitialState);

    return (
        <form className={classes.form_container} action={'submit'}>
            {formState.map((section) => (
                <section key={section.id} className={classes.form_section}>
                    <h2 className={classes.form_section__title}>
                        {section.sectionLabel}
                    </h2>
                    <DynamicFormSectionFields fields={section.fields} />
                </section>
            ))}
        </form>
    );
};

const DynamicFormSectionFields = ({
    fields,
}: DynamicFormSectionFieldsPropsType) => {
    return (
        <div className={classes.form_fields__container}>
            {fields.map((field) => (
                <div key={field.id} className={classes.form_field__wrapper}>
                    <label htmlFor={field.name}>{field.label}</label>
                    {field.asTextarea ? (
                        <textarea rows={3} />
                    ) : (
                        <input {...field} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default DynamicForm;
