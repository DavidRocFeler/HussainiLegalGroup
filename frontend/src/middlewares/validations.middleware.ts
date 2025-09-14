// middlewares/validations.middleware.ts
import { FormField, ValidationResult } from "@/types/validations";

export const validateContactForm = (
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    message: string;
  },
  fields: FormField[]
): ValidationResult => {
  const errors: string[] = [];

  fields.forEach(field => {
    if (field.required) {
      let fieldValue = '';
      
      switch (field.id) {
        case 'firstName':
          fieldValue = formData.firstName;
          break;
        case 'lastName':
          fieldValue = formData.lastName;
          break;
        case 'email':
          fieldValue = formData.email;
          break;
        case 'message':
          fieldValue = formData.message;
          break;
      }
      
      if (!fieldValue) {
        errors.push(field.label);
      }
      
      if (field.type === 'email' && fieldValue) {
        if (!validateEmail(fieldValue)) {
          if (!errors.includes(field.label)) {
            errors.push(`${field.label} (invalid format)`);
          }
        }
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || !value.trim()) {
    return {
      isValid: false,
      errors: [`${fieldName} is required`]
    };
  }
  
  return {
    isValid: true,
    errors: []
  };
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): ValidationResult => {
  if (value.length < minLength) {
    return {
      isValid: false,
      errors: [`${fieldName} must be at least ${minLength} characters long`]
    };
  }
  
  return {
    isValid: true,
    errors: []
  };
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): ValidationResult => {
  if (value.length > maxLength) {
    return {
      isValid: false,
      errors: [`${fieldName} cannot exceed ${maxLength} characters`]
    };
  }
  
  return {
    isValid: true,
    errors: []
  };
};