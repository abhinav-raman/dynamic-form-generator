import DynamicForm from './components/DynamicForm/DynamicForm';
import FieldsJsonInput from './components/FieldsJsonInput/FieldsJsonInput';

function App() {
    return (
        <main className="container">
            <div className="container_section">
                <DynamicForm />
            </div>
            <div className="container_section">
                <FieldsJsonInput />
            </div>
        </main>
    );
}

export default App;
