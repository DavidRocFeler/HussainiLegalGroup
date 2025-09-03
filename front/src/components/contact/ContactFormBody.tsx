import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { contactFormData } from '@/mock/contactFormBody.mock';
import FormInput from './FormInput';

const ContactFormBody = () => {
  const [message, setMessage] = useState('');
  const messageField = contactFormData.fields.find(field => field.id === 'message');
  const maxLength = messageField?.maxLength || 300;

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxLength) {
      setMessage(event.target.value);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        {contactFormData.fields.slice(0, 2).map((field) => (
          <Grid size={field.gridSize} key={field.id}>
            <FormInput 
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
            />
          </Grid>
        ))}
      </Grid>

      {contactFormData.fields.slice(2).map((field) => (
        <Box sx={{ mt: 3 }} key={field.id}>
          <Typography
            component="label"
            variant='h1'
            sx={{
              fontSize: "0.80rem",
              color: "#5E4740",
              display: 'block',
              marginBottom: 1,
              fontWeight: 400
            }}
          >
            {field.label}
          </Typography>
          {field.multiline ? (
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
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #E6E6E6',
                    resize: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    color: '#5E4740',
                    backgroundColor: 'transparent',
                    transition: 'border-color 0.2s',
                    '&:focus': {
                      outline: 'none',
                      borderColor: '#E6E6E6',
                    },
                    '&:hover': {
                      borderColor: '#E6E6E6',
                    },
                    '&::placeholder': {
                      color: '#A3A3A3',
                      opacity: 1,
                    }
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 14,
                    color: '#5E4740',
                    fontSize: '0.75rem',
                    pointerEvents: 'none',
                  }}
                >
                  {message.length}/{field.maxLength}
                </Typography>
            </Box>
            ) : (
            <Input
              fullWidth
              placeholder={field.placeholder}
              type={field.type}
              disableUnderline={false}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#5E4740",
                  padding: '6px 0',
                  "&::placeholder": {
                    color: "#A3A3A3",
                    fontFamily: "Inter",
                    fontSize: "0.8rem",
                    opacity: 1,
                  }
                },
                "&:before": {
                  borderBottomColor: "#E6E6E6 !important",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#E6E6E6 !important",
                },
                "&:after": {
                  borderBottomColor: "#E6E6E6 !important",
                },
                "&.Mui-focused:after": {
                  borderBottomColor: "#E6E6E6 !important",
                },
                "&:hover": {
                  "&:before": {
                    borderBottomColor: "#E6E6E6 !important",
                  }
                }
              }}
            />
          )}
        </Box>
      ))}

      <Box 
        sx={{ 
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
        }}
      >
        <Button
            size="small"
            variant="contained"
            type="submit"
            sx={{
            textTransform: "none",
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: 400,
            borderRadius: '0.375rem',
            padding: '0.62rem 1rem',
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#000",
            }
            }}
        >
            {contactFormData.submitButton.text}
        </Button>
        
        <Box sx={{ 
            width: { 
                xs: '100%', 
                md: '72%',
                lg: '82%' 
            }, 
            mt: {
                xs: '1rem',
                md: '0rem'
            },
            ml: 'auto',
            }}>
            <Typography
            variant="h5"
            display="block"
            sx={{ 
                lineHeight: 1.4,
                textAlign: 'start',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#333'
            }}
            >
            {contactFormData.disclaimer}
            </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactFormBody;