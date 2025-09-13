'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { subscribeContent } from '@/mock/subscribe.mock';
import { SubscribeContent } from '@/types/subscribe.d';
import { createSubscription } from '@/server/subscribe.server';
import { FormValidationMiddleware } from '@/middlewares/validatiors.middleware';
import { useSanityPost } from '@/hook/useSanityPost';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { postData, error: apiError, success, isLoading } = useSanityPost(createSubscription);

  const content: SubscribeContent = subscribeContent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validar campo requerido
    const requiredValidation = FormValidationMiddleware.validateRequired(email, 'Email');
    if (!requiredValidation.isValid) {
      setError(requiredValidation.errors[0]);
      return;
    }

    // Validar formato de email
    if (!FormValidationMiddleware.validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await postData({ 
        email: email.trim(),
        source: 'website' // Puedes cambiar esto según de dónde venga
      });
      
      setEmail('');
      // El estado de éxito se maneja a través del hook
      
    } catch (err: any) {
      // Manejar errores específicos
      if (err.message === 'Email already subscribed') {
        setError('This email is already subscribed to our newsletter');
      } else {
        setError(apiError || 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <Typography 
        variant="h1" 
        sx={{ 
          mb: 2,
          color: 'text.primary',
          fontSize: {
            xs: '2rem',
            sm: '2.25rem',
            md: '2.5rem'
          }
        }}
      >
        {content.title}
      </Typography>
      
      <Typography 
        variant="body1"
        sx={{ 
          mb: 4,
          color: 'text.primary',
          '&:hover': {
            color: 'text.primary'
          },
        }}
      >
        {content.description}
      </Typography>
      
      {success ? (
        <Box
          sx={{
            p: 2,
            backgroundColor: 'primary.main',
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.primary',
              '&:hover': {
                color: 'text.primary'
              },
            }}
          >
            {content.successMessage}
          </Typography>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <Typography
              component="label"
              variant="h10"
              color="text.secondary"
              sx={{
                fontSize: "0.80rem",
                display: 'block',
                mb: 1,
                fontWeight: 400,
                textAlign: 'left',
                width: '100%'
              }}
            >
              Email Address *
            </Typography>
            <Input
              fullWidth
              placeholder={content.placeholder}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
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
                  borderBottomColor: error ? "error.main" : "brand.borderGrey",
                },
                "&.Mui-focused:after": {
                  borderBottomColor: error ? "error.main" : "brand.borderGrey",
                },
              }}
            />
            {error && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'error.main', 
                  fontSize: '0.75rem', 
                  mt: 1, 
                  textAlign: 'left',
                  width: '100%',
                  display: 'block',
                }}
              >
                {error}
              </Typography>
            )}
          </Box>
          
          <Button
            type="submit"
            variant="redCahova"
            disabled={isLoading}
            fullWidth
            sx={{ 
              py: 1.5,
              fontSize: '1rem',
              minWidth: {
                xs: '4rem',
                sm: '5rem'
              }
            }}
          >
            {isLoading ? (
              <CircularProgress 
                size={20} 
                sx={{ 
                  color: 'primary.main' 
                }} 
              />
            ) : (
              content.buttonText
            )}
          </Button>
          
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: 'brand.greyText',
              fontSize: '0.75rem',
              textAlign: 'center',
            }}
          >
            {content.privacyText}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default SubscribeForm;