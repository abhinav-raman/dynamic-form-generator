import { useMemo } from 'react';
import { FormFieldSectionType, FormFieldType } from '../../utils/types';
import classes from './DynamicForm.module.css';
import Card from '../Card/Card';

type DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};

const DynamicForm = ({ form }: { form: FormFieldSectionType[] }) => {
    return (
        <form className={classes.form_container} action={'submit'}>
            <Card>
                {form.map((section) => (
                    <section key={section.id} className={classes.form_section}>
                        <h2 className={classes.form_section__title}>
                            {section.sectionLabel}
                        </h2>
                        <DynamicFormSectionFields fields={section.fields} />
                    </section>
                ))}
            </Card>
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
                    <FormField fieldConfig={field} />
                </div>
            ))}
        </div>
    );
};

const FormField = ({ fieldConfig }: { fieldConfig: FormFieldType }) => {
    const field: JSX.Element = useMemo(() => {
        switch (fieldConfig.type) {
            case 'textarea': {
                return <textarea rows={3} />;
            }

            default: {
                return <input {...fieldConfig} />;
            }
        }
    }, [fieldConfig]);

    return <>{field}</>;
};

export default DynamicForm;
