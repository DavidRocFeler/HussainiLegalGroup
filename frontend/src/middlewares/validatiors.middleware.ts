// middlewares/validations.middleware.ts
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
  
  export class FormValidationMiddleware {
    static validateContactForm(
      formData: {
        firstName: string;
        lastName: string;
        email: string;
        company?: string;
        message: string;
      },
      fields: FormField[]
    ): ValidationResult {
      const errors: string[] = [];
  
      // Validar campos requeridos
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
          
          // Validación específica para email
          if (field.type === 'email' && fieldValue) {
            if (!this.validateEmail(fieldValue)) {
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
    }
  
    static validateEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    static validateRequired(value: string, fieldName: string): ValidationResult {
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
    }
  
    static validateMinLength(value: string, minLength: number, fieldName: string): ValidationResult {
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
    }
  
    static validateMaxLength(value: string, maxLength: number, fieldName: string): ValidationResult {
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
    }
  }