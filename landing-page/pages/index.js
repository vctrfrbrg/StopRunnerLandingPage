import { Header } from './Header';
import { Hero } from './Hero';
import { AboutTheGame } from './AboutTheGame';
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f6f6f6', // This will be your background color.
    },
    primary: {
      main: '#717171', // This is red.
    },
    secondary: {
      main: '#f3f3f3', // This is indigo.
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
});


const Index = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Header />
        <AboutTheGame />
        <AboutUs />
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Index;