# Dynamic Form Generator

This is a React + Typescript + TailwindCSS project.

Clone repository

```bash
git clone https://github.com/abhinav-raman/dynamic-form-generator.git
cd dynamic-form-generator
```

Local setup:

```bash
npm install && npm run dev
```

Run tests:

```bash
npm run test
```

## Documentation

![Web view](/src/assets/image.png)

Let's first take a look at the types used in the project.

```typescript
FormFieldSectionType = {
    id: string;
    sectionLabel: string;
    fields: Array<FormFieldType>;
};

FormFieldType = React.InputHTMLAttributes<HTMLInputElement> & {
    "data-testid"?: string;
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
};
```

Above two are most prominent types that define the structure of the JSON input, hence also defining the prop type of the Form component.

- ### Dynamic Form:
    The form component `DynamicForm.tsx` uses the prop `form` to render its form fields dynamically and conditionally. This form is of type -

```typescript
DynamicFormSectionFieldsPropsType = {
    fields: Array<FormFieldType>;
};
```

Depending on the `field.type` value, appropriate field is rendered:

```typescript
switch (fieldConfig.type) {
    case 'textarea': {
        return (
            <textarea
                ...
            />
        );
    }

    default: {
        return (
            <input
                ...
            />
        );
    }
}
```

This logic is intuitive, and can easily be scaled to add custom field types / component, should the requirement arrives.

- ### JSON Input:
    JSON input is simply a `textarea` that takes the string (and trusts the user to provide correct fields!), verifies if its valid JSON (throws error otherwise) and passes it to its `onFormChange` callback on click of 'Submit' button. The 'Reset' button resets the JSON to its default state.

## Area of improvement

Due to time limitations, I could not manage enough time to polish the application. Although the basic functionality is fullfilled, there are a lot of areas in the application that can be improved heavily.

1.  #### State management:
    Application's source of truth (state) currently resides in `App.tsx` component, which is not scalable. It could be abstracted out into a reducer and the components can interact with the state on their without relying on props.
2.  #### Input JSON validation:

        I feel instead of a `textarea` is not ideal to accept JSON from user.

    A more intuitive and user friendly way would be to use something like [react-json-view](https://www.npmjs.com/package/react-json-view) library, which makes viewing and editing JSON much easier.

    But this way also has a flaw, no typesafety. User still does not has a way to know what fields are valid. Hence, best case scenario would be to build a UI to accept the form configuration (something like google forms builder), that clearly communicate the JSON API to the user via user interface.

3.  #### Form fields with custom validation:
    Currently there's only default HTML validation on the form fields. Each field type should have custom validation based on its `type`.

Thanks, <br />
Abhinav (https://www.abhinavraman.in/)
