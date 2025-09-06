import { ContactFormData } from '@/types/contact';

export const contactFormData: ContactFormData = {
  fields: [
    {
      id: 'firstName',
      label: 'First Name',
      placeholder: 'e.g. John',
      gridSize: { xs: 12, sm: 6 },
      required: true
    },
    {
      id: 'lastName',
      label: 'Last Name',
      placeholder: 'e.g. Dowry',
      gridSize: { xs: 12, sm: 6 },
      required: true
    },
    {
      id: 'email',
      label: 'Email address',
      placeholder: 'e.g. john.doe@example.com',
      type: 'email',
      gridSize: { xs: 12, sm: 12 },
      required: true
    },
    {
      id: 'company',
      label: 'Company',
      placeholder: 'e.g. Company XYZ',
      gridSize: { xs: 12, sm: 12 },
      ifAny: '(if any)',
      required: false
    },
    {
      id: 'message',
      label: 'Additional Message',
      placeholder: 'Example Text',
      multiline: true,
      rows: 5,
      maxLength: 300,
      gridSize: { xs: 12, sm: 12 },
      required: true
    }
  ],
  submitButton: {
    text: 'Submit the message'
  },
  disclaimer: `By pressing the contact button, I agree to Hussaini Legal Group contacting me by email and/or phone. I also understand that any information I've shared in this form is subject to Hussaini Legal Group Privacy Policy.`
};