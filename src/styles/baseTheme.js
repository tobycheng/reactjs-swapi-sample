import { createTheme } from '@mui/material/styles';


const baseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFE81F',
    },
    text: {
      primary: '#FFE81F',
      // secondary: '#FFE81F',
    },
    background: {
      default: '#060607',
      paper: '#060607',
    },
  },
  typography: {
    fontFamily: "Helvetica",
  }

})

export default baseTheme;