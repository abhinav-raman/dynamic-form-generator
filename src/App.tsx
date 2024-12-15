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
        <main className="container">
            <DynamicForm form={formState} />
            <FieldsJsonInput
                form={formState}
                onFormChange={handleFormStateChange}
            />
        </main>
    );
}

export default App;
