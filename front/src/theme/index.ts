// theme/index.ts
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { components } from './components';
import { palette } from './palette';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette,
  typography,
  components,
});

export default theme;