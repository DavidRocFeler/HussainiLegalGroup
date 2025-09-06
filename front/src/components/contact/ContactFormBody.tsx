'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useState, useRef } from 'react';
import { contactFormData } from '@/mock/contactFormBody.mock';
import FormInput from './FormInput';
import SuccessAlert from '../ui/SuccessAlert';
import ErrorAlert from '../ui/ErrorAlert';

const ContactFormBody = () => {
  const [message, setMessage] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  
  const messageField = contactFormData.fields.find(field => field.id === 'message');
  const maxLength = messageField?.maxLength || 300;

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxLength) {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const missing: string[] = [];
    let hasErrors = false;
    
    contactFormData.fields.forEach(field => {
      // Skip validation for company field (make it non-required)
      if (field.id === 'company') {
        return;
      }

      if (field.id === 'message') {
        if (!message.trim()) {
          missing.push(field.label);
          hasErrors = true;
        }
      } else {
        const inputValue = inputRefs.current[field.id]?.value;
        if (!inputValue || !inputValue.trim()) {
          missing.push(field.label);
          hasErrors = true;
        }
        
        if (field.type === 'email' && inputValue && inputValue.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(inputValue.trim())) {
            if (!missing.includes(field.label)) {
              missing.push(`${field.label} (invalid format)`);
            }
            hasErrors = true;
          }
        }
      }
    });

    if (hasErrors || missing.length > 0) {
      setMissingFields(missing);
      setOpenErrorDialog(true);
      return; 
    }
    
    setOpenSuccessDialog(true);
    Object.keys(inputRefs.current).forEach(key => {
      if (inputRefs.current[key]) {
        inputRefs.current[key]!.value = '';
      }
    });
    setMessage('');
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

        {/* Email */}
        {contactFormData.fields.filter(field => field.id === 'email').map((field) => (
        <Box
          sx={{ mt: 4 }}
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

        {/* Company field with custom rendering */}
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

        {/* message */}
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
              nd: 9
            },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Button
          type='submit'
          variant='buttonContact'
          >
            {contactFormData.submitButton.text}
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