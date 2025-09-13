import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ErrorAlertProps } from '@/types/reusable';

const ErrorAlert = ({ open, onClose, missingFields }: ErrorAlertProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            minWidth: { xs: '90%', sm: '500px' },
            maxWidth: { xs: '90%', sm: '500px', md: '500px' },
            textAlign: 'center',
            p: 2,
            zIndex: 10001,
            position: 'relative'
          }
        }
      }}
      sx={{
        zIndex: 10001,
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent'
        }
      }}
    >
      <DialogContent sx={{ pt: 3, px: { xs: 1, sm: 2 } }}>
        <ErrorOutlineIcon 
          sx={{ 
            fontSize: { xs: 50, sm: 60 }, 
            color: 'brand.red', 
            mb: 2 
          }} 
        />
        <Typography 
          color='brand.red' 
          variant="h5" 
          fontWeight="bold" 
          gutterBottom 
          mb={4}
          sx={{ 
            fontSize: { 
              xs: '1rem', 
              sm: '1.25rem' 
            },
            fontFamily: 'Merriweather'
          }}
        >
          Please complete all fields
        </Typography>
        <Box 
          sx={{ 
            mt: 1, 
            textAlign: 'left',
            backgroundColor: 'transparent',
            p: 1,
            borderRadius: 1
          }}
        >
          <Typography 
            sx={{ 
              fontWeight: 'bold', 
              color: 'error.dark', 
              mb: 1,
              '&:hover': {
                color: 'error.dark', 
              }             
            }}
          >
            Missing fields:
          </Typography>
          <Box 
            component="ul"
            sx={{ 
              m: 1, 
              pl: 2.5,
              color: 'brand.errorText',
              fontSize: '0.9rem'
            }}
          >
            {missingFields.map((field, index) => (
              <Box component="li" key={index}>{field}</Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2, px: { xs: 1, sm: 2 } }}>
        <Button 
          variant="redCahova"
          onClick={onClose}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorAlert;