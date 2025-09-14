import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ExtendedFormInputProps } from '@/types/contact';

const FormInput = ({ label, placeholder, type, required, inputRef }: ExtendedFormInputProps) => {
  return (
    <Box
    mb={{xs: 2, sm: 0}}
    >
      <Typography
        color='text.secondary'
        variant='h10'
        component="label"
        sx={{
          fontSize: "0.80rem",
          display: 'block',
          marginBottom: 1,
          fontWeight: 400
        }}
      >
        {label} {required && '*'}
      </Typography>
      <Input
        inputRef={inputRef}
        fullWidth
        placeholder={placeholder}
        type={type}
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
  );
};

export default FormInput;