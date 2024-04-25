import baseTheme from "../styles/baseTheme";
import { useDropdownContext } from "../context/DropdownContext";

import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


const CircularLoad = () => {
  const {isLoading} = useDropdownContext();
  return (!isLoading) ? <></> : (
    <ThemeProvider theme={baseTheme}>
      <div></div>
      <div className="loadbar"><CircularProgress/></div>
      <div></div>
    </ ThemeProvider>
  )
}

export default CircularLoad;