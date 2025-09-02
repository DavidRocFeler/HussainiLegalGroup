import { Box, Button, Grid, Input, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { contactFormData } from '@/mock/contactFormBody.mock';

const ContactFormBody = () => {
  const [message, setMessage] = useState('');
  const messageField = contactFormData.fields.find(field => field.id === 'message');
  const maxLength = messageField?.maxLength || 300;

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= maxLength) {
      setMessage(event.target.value);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        {contactFormData.fields.slice(0, 2).map((field) => (
          <Grid size={field.gridSize} key={field.id}>
            <Box>
              <Typography
                variant='h1'
                component="label"
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
            </Box>
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
                <TextField
                fullWidth
                placeholder={field.placeholder}
                multiline
                rows={field.rows}
                variant="outlined"
                value={message}
                onChange={handleMessageChange}
                slotProps={{
                  htmlInput: { 
                    maxLength: field.maxLength 
                  }
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                    borderRadius: '10px',
                    "& fieldset": {
                        borderColor: "#E6E6E6 !important",
                    },
                    "&:hover fieldset": {
                        borderColor: "#E6E6E6 !important",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#E6E6E6 !important",
                    },
                    "&:hover": {
                        "& fieldset": {
                            borderColor: "#E6E6E6 !important",
                        }
                    },
                    "& .MuiInputBase-input": {
                        color: "#5E4740",
                        "&::placeholder": {
                          color: "#A3A3A3",
                          fontFamily: "Inter",
                          fontSize: "0.8rem",
                          opacity: 1,
                        }
                    },
                    },
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