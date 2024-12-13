import { useReducer } from 'react';
import ReactJson from 'react-json-view';
import { formInitialState, formReducer } from '../../reducers/FormReducer';

const FieldsJsonInput = () => {
    const [formState, dispatch] = useReducer(formReducer, formInitialState);

    return (
        <div>
            <ReactJson
                src={formState}
                indentWidth={2}
                onEdit={({ updated_src }) => console.log(updated_src)}
                enableClipboard={false}
                displayDataTypes={false}
                displayObjectSize={false}
            />
        </div>
    );
};

export default FieldsJsonInput;
