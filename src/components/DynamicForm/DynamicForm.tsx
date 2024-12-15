import { useMemo } from 'react';
import { FormFieldSectionType, FormFieldType } from '../../utils/types';
import Card from '../Card/Card';

type DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};

const DynamicForm = ({ form }: { form: FormFieldSectionType[] }) => {
    return (
        <form className="w-full rounded-lg sm:rounded-theme h-[calc(48vh)] overflow-y-scroll sm:h-auto sm:w-1/2 flex flex-col p-0">
            <Card>
                {form.map((section) => (
                    <section key={section.id} className="flex flex-col">
                        <h2 className="text-black text-xl font-medium mb-4">
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
        <div className="flex flex-col">
            {fields.map((field) => (
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

const FormField = ({ fieldConfig }: { fieldConfig: FormFieldType }) => {
    const field: JSX.Element = useMemo(() => {
        switch (fieldConfig.type) {
            case 'textarea': {
                return (
                    <textarea
                        rows={3}
                        data-testid={fieldConfig['data-testid']}
                        className="p-2.5 border rounded-lg border-gray-300 focus:outline-blue-500 resize-vertical max-h-[200px] min-h-[40px]"
                    />
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
