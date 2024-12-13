import { FORM_STATE } from "../utils/formData";
import { FormFieldSectionType } from "../utils/types";

export const formInitialState = FORM_STATE 

type ActionType = 
    | { type: "ADD", sectionId: string } 
    | { type: "EDIT", sectionId: string, fieldId: string }
    | { type: "DELETE", sectionId: string, fieldId: string }

export function formReducer (formState: Array<FormFieldSectionType>, action: ActionType): Array<FormFieldSectionType> {
    switch (action.type) {
        case "ADD": {
            console.log(formState, action)
            return {
                ...formState, 
                // [action.sectionId]: [...formState[action.sectionId]] 
            }
        }

        case "EDIT": {
            return formState
        }

        case "DELETE": {
            return formState
        }

        default: {
            return formState
        }
    }
}