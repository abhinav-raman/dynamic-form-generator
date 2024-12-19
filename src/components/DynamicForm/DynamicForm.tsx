import { useEffect, useMemo } from 'react';
import { FormFieldSectionType, FormFieldType } from '../../utils/types';
import Card from '../Card/Card';
import { useForm } from 'react-hook-form';

type DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};

/**
 * Forms should be controlled :
 * section: {
 *  fields: [
 *   {
 *      value: "",
 *      onChange: (val) => void
 *     }
 *  ]
 * }
 *
 *
 */

const DynamicForm = ({ form }: { form: FormFieldSectionType[] }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const fieldsControl = useMemo(() => {
        return form.map((section) => ({
            ...section,
            fields: section.fields.map((field) => ({
                ...field,
                ...register(field.name || 'default'),
            })),
        }));
    }, [form, register]);

    const onFormSubmit = (formData: any) => {
        console.log('Form data: ', formData);
    };

    return (
        <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="w-full rounded-lg sm:rounded-theme h-[calc(48vh)] overflow-y-scroll sm:h-auto sm:w-1/2 flex flex-col p-0"
        >
            <Card>
                {form.map((section, index) => (
                    <section key={section.id} className="flex flex-col">
                        <h2 className="text-black text-xl font-medium mb-4">
                            {section.sectionLabel}
                        </h2>
                        <DynamicFormSectionFields
                            fields={fieldsControl[index]}
                        />
                    </section>
                ))}
                <input className="px-3 py-2 bg-gray-200" type="submit" />
            </Card>
        </form>
    );
};

const DynamicFormSectionFields = ({
    fields,
}: DynamicFormSectionFieldsPropsType) => {
    const { fields: sectionFields } = fields;

    return (
        <div className="flex flex-col">
            {sectionFields.map((field) => (
                <div key={field.id} className="flex flex-col mb-2">
                    <label
                        htmlFor={field.name}
                        className="font-medium text-gray-800 mb-1"
                    >
                        {field.label}
                    </label>
                    <FormField fieldConfig={field} />
                </div>
            ))}
        </div>
    );
};

/**
 * 
 *  "type": "combined",
"subFields": [
            {
                "id": "0.7739017209214409",
                "label": "First name",
                "name": "first-name",
                "type": "text",
                "placeholder": "Enter you first name..."
            },
            {
                "id": "0.7739017209214409",
                "label": "First name",
                "name": "last-name",
                "type": "text",
                "placeholder": "Enter you first name.."
            },
]
 * @returns 
 */

const FormField = ({ fieldConfig }: { fieldConfig: FormFieldType }) => {
    const field: JSX.Element = useMemo(() => {
        switch (fieldConfig.type) {
            case 'textarea': {
                return (
                    <textarea
                        {...fieldConfig}
                        rows={3}
                        data-testid={fieldConfig['data-testid']}
                        className="p-2.5 border rounded-lg border-gray-300 focus:outline-blue-500 resize-vertical max-h-[200px] min-h-[40px]"
                    />
                );
            }

            case 'combined': {
                return (
                    <div className="flex flex-col gap-2">
                        {fieldConfig?.subFields.map((subField) => (
                            <input
                                {...subField}
                                className="p-2.5 border rounded-lg border-gray-300 focus:outline-blue-500"
                                key={subField.id}
                                id={subField.id}
                                type={subField.type}
                            />
                        ))}
                    </div>
                );
            }

            default: {
                return (
                    <input
                        {...fieldConfig}
                        id={fieldConfig.name}
                        className="p-2.5 border rounded-lg border-gray-300 focus:outline-blue-500"
                    />
                );
            }
        }
    }, [fieldConfig]);

    return <>{field}</>;
};

export default DynamicForm;
