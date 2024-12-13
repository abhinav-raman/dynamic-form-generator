import { useState } from "react";
import { FORM_STATE } from "../utils/formData";
import { FormFieldSectionType } from "../utils/types";

export function useFormData () {
    const [formState, setFormState] = useState<Array<FormFieldSectionType>>(FORM_STATE)

    return {
        formState, setFormState
    }
}