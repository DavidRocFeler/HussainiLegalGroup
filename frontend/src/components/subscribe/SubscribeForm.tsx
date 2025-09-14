'use client';
import { useState, useTransition } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { subscribeContent } from '@/mock/subscribe.mock';
import { SubscribeContent } from '@/types/subscribe.d';
import { subscribeAction } from '@/server/subscribe.server';
import { validateRequired, validateEmail } from '@/middlewares/validations.middleware';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const content: SubscribeContent = subscribeContent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const requiredValidation = validateRequired(email, 'Email');
    if (!requiredValidation.isValid) {
      setError(requiredValidation.errors[0]);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('email', email.trim());
        formData.append('source', 'website');

        const result = await subscribeAction(formData);

        if (result.success) {
          setSuccess(true);
          setEmail('');
          setError('');
        } else {
          if (result.error === 'Email already subscribed') {
            setError('This email is already subscribed to our newsletter');
          } else {
            setError(result.error || result.message || 'Something went wrong. Please try again.');
          }
        }
      } catch (err: any) {
        setError('Something went wrong. Please try again.');
      }
    });
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
              disabled={isPending}
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
            disabled={isPending}
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
            {isPending ? (
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