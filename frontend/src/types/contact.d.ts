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

  // Data for sanity
export interface ContactMessage {
  _id?: string;
  _type: 'contactMessage';
  name: string;
  email: string;
  company?: string;
  message: string;
  receivedAt: string;
  isRead: boolean;
}
  