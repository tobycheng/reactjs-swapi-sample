import sendRequest from "./SendRequest";
import { useDropdownContext } from "../context/DropdownContext";

import {
  IconButton,
  Stack,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#FFE81F',
  //   },
  // },
});

const NavLink = (props) => {
  const {setResponse, setIsLoading} = useDropdownContext();

  const handleNavLink = async (url) => {
    setIsLoading(true)
    const resp = await sendRequest(url)
    setResponse(resp)
    setIsLoading(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton 
        disabled={props.prevUrl === null}
        onClick={()=>{handleNavLink(props.prevUrl)}}
        color="primary"
        >
          <NavigateBeforeRoundedIcon />
        </ IconButton>
        
        <IconButton
        disabled={props.nextUrl === null}
        onClick={()=>{handleNavLink(props.nextUrl)}}
        color="primary"
        >
          <NavigateNextRoundedIcon />
        </ IconButton>
      </ Stack>
    </ThemeProvider>
  )
}

export default NavLink;