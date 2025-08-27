import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    primary: {
      main: blue[700], 
    },
    secondary: {
      main: red[500], 
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;