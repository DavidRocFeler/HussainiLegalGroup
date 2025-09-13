import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SuccessAlertProps } from '@/types/reusable';

const SuccessAlert = ({ open, onClose }: SuccessAlertProps) => {
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
        <CheckCircleIcon 
          sx={{ 
            fontSize: { xs: 50, sm: 60 },
            color: 'brand.gold',
            fontFamily: 'Merriweather',
            mb: 3
          }}
        />
        <Typography 
          fontWeight="bold" 
          gutterBottom 
          sx={{ 
            fontSize: { 
              xs: '1rem', 
              sm: '1.25rem'
            },
            color: 'brand.gold',
            fontFamily: 'Merriweather'
          }}
        >
          Message Sent Successfully!
        </Typography>
        <Typography  
          color="text.secondary" 
          sx={{ 
            fontSize: { xs: '0.8rem', sm: '0.9rem' }
          }}
        >
          We'll get back to you soon.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2, px: { xs: 1, sm: 2 } }}>
        <Button 
          variant="goldenOchre"
          onClick={onClose}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessAlert;