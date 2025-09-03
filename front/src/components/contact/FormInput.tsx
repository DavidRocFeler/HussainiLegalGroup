import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const FormInput = ({ label, placeholder, type }: FormInputProps) => {
  return (
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
        {label}
      </Typography>
      <Input
        fullWidth
        placeholder={placeholder}
        type={type}
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
  );
};

export default FormInput;