// theme/components.ts
import { Components } from '@mui/material/styles';

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: '8px',
      },
    },
  },
};