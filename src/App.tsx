import { useState } from 'react';
import DynamicForm from './components/DynamicForm/DynamicForm';
import FieldsJsonInput from './components/FieldsJsonInput/FieldsJsonInput';
import { FormFieldSectionType } from './utils/types';
import { FORM_STATE } from './utils/formData';

function App() {
    const [formState, setFormState] = useState(FORM_STATE);

    function handleFormStateChange(state: FormFieldSectionType[]) {
        setFormState(state);
    }

    return (
        <main className="flex flex-col p-2 sm:flex-row items-stretch w-full min-h-screen sm:p-8 box-border gap-2 sm:gap-8">
            <DynamicForm form={formState} />
            <FieldsJsonInput
                form={formState}
                onFormChange={handleFormStateChange}
            />
        </main>
    );
}

export default App;
