import { useFormData } from "../../hooks/useFormData";
import { FormFieldType } from "../../utils/types";
import classes from "./DynamicForm.module.css";

// type DynamicFormPropsType = {
//     fieldsConfig: Array<FormFieldSectionType>;
// };

type DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};

const DynamicForm = () => {
    const { formState } = useFormData();

    return (
        <form className={classes.form_container} action={"submit"}>
            {formState.map((field) => (
                <section className={classes.form_section}>
                    <h2 className={classes.form_section__title}>
                        {field.sectionLabel}
                    </h2>
                    <DynamicFormSectionFields fields={field.fields} />
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
                <div className={classes.form_field__wrapper}>
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
