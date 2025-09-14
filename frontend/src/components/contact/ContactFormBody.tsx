'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useState, useRef, useTransition } from 'react';
import { contactFormData } from '@/mock/contactFormBody.mock';
import FormInput from './FormInput';
import SuccessAlert from '../ui/SuccessAlert';
import ErrorAlert from '../ui/ErrorAlert';
import { validateContactForm, validateMaxLength, validateMinLength, validateRequired, validateEmail } from '@/middlewares/validations.middleware';
import { CircularProgress } from '@mui/material';
import { contactAction } from '@/server/contact.server';

const ContactFormBody = () => {
  const [message, setMessage] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  
  const messageField = contactFormData.fields.find(field => field.id === 'message');
  const maxLength = messageField?.maxLength || 300;

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    const maxLengthValidation = validateMaxLength(
      newValue, 
      maxLength, 
      'Message'
    );
    
    if (maxLengthValidation.isValid) {
      setMessage(newValue);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = {
      firstName: inputRefs.current['firstName']?.value?.trim() || '',
      lastName: inputRefs.current['lastName']?.value?.trim() || '',
      email: inputRefs.current['email']?.value?.trim() || '',
      company: inputRefs.current['company']?.value?.trim() || '',
      message: message.trim()
    };

    const validationResult = validateContactForm(
      formData,
      contactFormData.fields
    );

    if (!validationResult.isValid) {
      setMissingFields(validationResult.errors);
      setOpenErrorDialog(true);
      return;
    }

    const minMessageLength = 10; 
    const messageMinLengthValidation = validateMinLength(
      formData.message,
      minMessageLength,
      'Message'
    );

    if (!messageMinLengthValidation.isValid) {
      setMissingFields(messageMinLengthValidation.errors);
      setOpenErrorDialog(true);
      return;
    }

    startTransition(async () => {
      try {
        const serverFormData = new FormData();
        serverFormData.append('firstName', formData.firstName);
        serverFormData.append('lastName', formData.lastName);
        serverFormData.append('email', formData.email);
        serverFormData.append('company', formData.company);
        serverFormData.append('message', formData.message);

        const result = await contactAction(serverFormData);

        if (result.success) {
          Object.keys(inputRefs.current).forEach(key => {
            if (inputRefs.current[key]) {
              inputRefs.current[key]!.value = '';
            }
          });
          setMessage('');
          setOpenSuccessDialog(true);
        } else {
          setMissingFields([result.error || result.message]);
          setOpenErrorDialog(true);
        }
      } catch (err: any) {
        console.error('Submit error:', err);
        setMissingFields(['Failed to send message. Please try again.']);
        setOpenErrorDialog(true);
      }
    });
  };

  const validateField = (fieldId: string, value: string) => {
    const field = contactFormData.fields.find(f => f.id === fieldId);
    if (!field) return;

    if (field.required) {
      const requiredValidation = validateRequired(value, field.label);
      if (!requiredValidation.isValid) {
        return requiredValidation.errors;
      }
    }

    if (field.type === 'email' && value) {
      const isValidEmail = validateEmail(value);
      if (!isValidEmail) {
        return [`${field.label} has invalid format`];
      }
    }

    return [];
  };

  return (
    <>
      <Box 
        component="form" 
        autoComplete="off" 
        onSubmit={handleSubmit}
      >
        <Grid 
          container 
          spacing={2}
        >
          {contactFormData.fields.slice(0, 2).map((field) => (
            <Grid 
              size={field.gridSize} 
              key={field.id}
            >
              <FormInput 
                inputRef={(el) => {
                  inputRefs.current[field.id] = el;
                }}
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                required={field.required}
              />
            </Grid>
          ))}
        </Grid>

        {contactFormData.fields.filter(field => field.id === 'email').map((field) => (
        <Box
          mt={{xs: 2, sm: 4}}
          key={field.id}
        >
          <Typography
            component="label"
            variant='h10'
            color='text.secondary'
            sx={{
              fontSize: "0.80rem",
              display: 'block',
              mb: 1,
              fontWeight: 400
            }}
          >
            {field.label} {field.required && '*'}
          </Typography>
          <Input
            inputRef={(el) => {
              inputRefs.current[field.id] = el;
            }}
            fullWidth
            placeholder={field.placeholder}
            type={field.type}
            disableUnderline={false}
            sx={{
              "& .MuiInputBase-input": {
                color: "text.secondary",
                py: 0.75,
                fontFamily: 'Inter',
                fontSize: '0.85rem',
                "&::placeholder": {
                  color: "brand.placeholderGrey",
                  fontFamily: "Inter",
                  fontSize: '0.85rem',
                  opacity: 1,
                }
              },
              "&:before": {
                borderBottomColor: "brand.borderGrey",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "brand.borderGrey",
              },
              "&:after": {
                borderBottomColor: "brand.borderGrey",
              },
              "&.Mui-focused:after": {
                borderBottomColor: "brand.borderGrey",
              },
              "&:hover": {
                "&:before": {
                  borderBottomColor: "brand.borderGrey",
                }
              }
            }}
          />
        </Box>
        ))}

        {contactFormData.fields.find(field => field.id === 'company') && (
          <Box sx={{ mt: 4 }}>
            <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'baseline', 
                gap: 1, 
                mb: 1, 
                position: 'relative'
              }}>
              <Typography
                component="label"
                variant='h10'
                color='text.secondary'
                sx={{
                  fontSize: "0.80rem",
                  fontWeight: 400
                }}
              >
                Company
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 34,
                  color: 'brand.placeholderContact',
                  fontFamily: 'Inter',
                  fontSize: '0.875rem',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.25rem',
                  letterSpacing: '-0.01rem'
                }}
              >
                (if any)
              </Typography>
            </Box>
            <Input
              inputRef={(el) => {
                inputRefs.current['company'] = el;
              }}
              fullWidth
              placeholder="e.g. Company XYZ"
              type="text"
              disableUnderline={false}
              sx={{
                "& .MuiInputBase-input": {
                  color: "text.secondary",
                  py: 0.75,
                  fontFamily: 'Inter',
                  fontSize: '0.85rem',
                  "&::placeholder": {
                    color: "brand.placeholderGrey",
                    fontFamily: "Inter",
                    fontSize: '0.85rem',
                    opacity: 1,
                  }
                },
                "&:before": {
                  borderBottomColor: "brand.borderGrey",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "brand.borderGrey",
                },
                "&:after": {
                  borderBottomColor: "brand.borderGrey",
                },
                "&.Mui-focused:after": {
                  borderBottomColor: "brand.borderGrey",
                },
                "&:hover": {
                  "&:before": {
                    borderBottomColor: "brand.borderGrey",
                  }
                }
              }}
            />
          </Box>
        )}

        {contactFormData.fields
          .filter(field => field.id === 'message')
          .map((field) => (
            <Box sx={{ mt: 4 }} key={field.id}>
              <Typography
                component="label"
                variant='h10'
                color='text.secondary'
                sx={{
                  fontSize: "0.80rem",
                  display: 'block',
                  mb: 1,
                  fontWeight: 400
                }}
              >
                {field.label} {field.required && '*'}
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="textarea"
                  placeholder={field.placeholder}
                  value={message}
                  onChange={handleMessageChange}
                  maxLength={field.maxLength}
                  rows={field.rows}
                  sx={{
                    width: '100%',
                    p: 1.5,
                    borderRadius: '5px',
                    border: '1px solid',
                    borderColor: 'brand.borderGrey',
                    resize: 'none',
                    fontFamily: 'Inter',
                    fontSize: '0.85rem',
                    color: 'text.secondary',
                    backgroundColor: 'transparent',
                    transition: 'border-color 0.2s',
                    '&:focus': {
                      outline: 'none',
                      borderColor: 'brand.borderGrey',
                    },
                    '&:hover': {
                      borderColor: 'brand.borderGrey',
                    },
                    '&::placeholder': {
                      color: 'brand.placeholderGrey',
                      opacity: 1,
                    }
                  }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 3,
                    right: 10,
                    fontFamily: 'Inter',
                    color: 'brand.placeholderContact',
                    fontSize: '0.75rem',
                    pointerEvents: 'none',
                  }}
                >
                  {message.length}/{field.maxLength}
                </Typography>
              </Box>
            </Box>
          ))}

        <Box 
          sx={{ 
            mt: 4,
            mb: {
              xs: 7,
              md: 9
            },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Button
            type='submit'
            variant='primary'
            disabled={isPending}
            sx={{
              minWidth: '10rem'
            }}
          >
            {isPending ? (
              <CircularProgress 
                size={20} 
                sx={{ 
                  color: 'white' 
                }} 
              />
            ) : (
              contactFormData.submitButton.text
            )}
          </Button>
          
          <Box 
            sx={{ 
              width: { 
                xs: '100%', 
                md: '68%',
                lg: '78%' 
              }, 
              mt: {
                xs: 2,
                md: 0
              },
              ml: 'auto',
            }}
          >
            <Typography
              variant='h11'
              display="block"
              color='text.primary'
              sx={{ 
                lineHeight: 1.4,
                textAlign: 'start',
                fontSize: '0.75rem',
                fontWeight: 700
              }}
            >
              {contactFormData.disclaimer}
            </Typography>
          </Box>
        </Box>
        
      </Box>

      {(openErrorDialog || openSuccessDialog) && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'brand.overlayBlack',
            zIndex: 10000, 
          }}
        />
      )}

      <ErrorAlert
        open={openErrorDialog}
        onClose={() => setOpenErrorDialog(false)}
        missingFields={missingFields}
      />

      <SuccessAlert
        open={openSuccessDialog}
        onClose={() => setOpenSuccessDialog(false)}
      />
    </>
  );
};

export default ContactFormBody;