export interface ContactFormField {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
    maxLength?: number;
    gridSize?: {
      xs: number;
      sm: number;
    };
    required?: boolean;
    ifAny?: string;
  }
  
  export interface ContactFormData {
    fields: ContactFormField[];
    submitButton: {
      text: string;
    };
    disclaimer: string;
  }

  export interface FormInputProps {
    label: string;
    placeholder: string;
    type?: string;
       required?: boolean;
  }
  
 export interface ExtendedFormInputProps extends FormInputProps {
    inputRef?: (el: HTMLInputElement) => void;
  }

  // Data for backend
  export interface ContactFormSubmitData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
  }

  