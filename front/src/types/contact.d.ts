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
  }
  
  export interface ContactFormData {
    fields: ContactFormField[];
    submitButton: {
      text: string;
    };
    disclaimer: string;
  }
  
  // Data for backend
  export interface ContactFormSubmitData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
  }