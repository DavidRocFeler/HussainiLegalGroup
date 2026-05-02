'use client';
import { useState, useTransition } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { footerMock } from '@/mock/footer.mock';
import SocialMedias from './ui/SocialMedias';
import { subscribeAction } from '@/server/subscribe.server';
import { SocialMediaLink } from '@/types/footer';
import { validateEmail, validateRequired } from '@/middlewares/validations.middleware';
import { Topics } from '@/mock/topics.mock';

const FooterNewsletter = ({ socialMedias }: { socialMedias: SocialMediaLink[] }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicToggle = (id: string) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

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
        formData.append('source', 'footer');
        formData.append('topics', selectedTopics.join(','));

        const result = await subscribeAction(formData);

        if (result.success) {
          setSuccess(true);
          setEmail('');
          setSelectedTopics([]);
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
    <Box sx={{
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      textAlign: { xs: 'center', desktopMid: 'left' },
      alignItems: { xs: 'center', desktopMid: 'flex-start' },
    }}>
      <Typography variant="h6" mb={2} sx={{ textAlign: { xs: 'center', desktopMid: 'left' } }}>
        {footerMock.sections.newsletter.title}
      </Typography>
      <Typography variant='body2' mb={3} sx={{ width: { xs: 'auto', desktopMid: '20rem' }, textAlign: { xs: 'center', desktopMid: 'left' } }}>
        {footerMock.sections.newsletter.description}
      </Typography>

      {success ? (
        <Typography variant="body2" sx={{ color: 'brand.whiteText', mb: 3 }}>
          Thank you for subscribing!
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: { xs: 'auto', desktopMid: '20rem' } }}>
          <Input
            fullWidth
            placeholder="your.email@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            disableUnderline={false}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": {
                color: "brand.whiteText",
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
              "&:before": { borderBottomColor: "brand.borderGrey" },
              "&:hover:not(.Mui-disabled):before": { borderBottomColor: "brand.borderGrey" },
              "&:after": { borderBottomColor: error ? "error.main" : "brand.borderGrey" },
            }}
          />

          {error && (
            <Typography variant="body2" sx={{ color: 'error.main', fontSize: '0.75rem', mb: 1, textAlign: 'left' }}>
              {error}
            </Typography>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', desktopMid: 'flex-start' }, mb: 2 }}>
            {Topics.map((topic) => (
              <FormControlLabel
                key={topic.id}
                control={
                  <Checkbox
                    checked={selectedTopics.includes(topic.id)}
                    onChange={() => handleTopicToggle(topic.id)}
                    disabled={isPending}
                    sx={{
                      color: 'brand.whiteText',
                      '&.Mui-checked': { color: 'brand.whiteText' },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'brand.whiteText' }}>
                    {topic.label}
                  </Typography>
                }
              />
            ))}
          </Box>

          <Button
            type="submit"
            variant="buttonSubscribe"
            disabled={isPending}
            fullWidth
            sx={{ mb: 3 }}
          >
            {isPending ? (
              <CircularProgress size={20} sx={{ color: 'primary.main' }} />
            ) : (
              'Subscribe Now'
            )}
          </Button>
        </Box>
      )}

      <SocialMedias socialMedias={socialMedias} />
    </Box>
  );
};

export default FooterNewsletter;