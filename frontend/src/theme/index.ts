
// theme/index.ts
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import { components } from './components';
import breakpoints from './breakpoints';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette,
  typography,
  components,
  breakpoints,
});

export default theme;