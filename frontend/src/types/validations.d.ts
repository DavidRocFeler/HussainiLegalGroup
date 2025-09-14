export interface ValidationResult {
    isValid: boolean;
    errors: string[];
  }
  
  export interface FormField {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
  }