import React from 'react';
import PricingPage from './pages/PricingPage/index';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1180D7',
    },
    secondary: {
      main: '#12191F',
    },
    success: {
      dark: '#00B065',
      main: '#33C084',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '64px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '36px',
    },
    h4: {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '1.5',
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
      fontSize: '18px',
    },
    subtitle1: {
      fontWeight: 'initial',
      fontSize: '14px',
      fontStyle: 'italic',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline style={{ backgroundColor: '#FFF' }}>
        <PricingPage />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
