import sendRequest from "./SendRequest";
import { useDropdownContext } from "../context/DropdownContext";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFE81F',
    },
  },
});

const NavLink = (props) => {
  const {setResponse, setLoading} = useDropdownContext();

  const handleNavLink = async (url) => {
    setLoading(true)
    const resp = await sendRequest(url)
    setResponse(resp)
    setLoading(false)
  }


  return (
    <ThemeProvider theme={theme}>
      <div className="navlink">
        <Button 
          variant="outlined"
          disabled={props.url === null}
          onClick={()=>{handleNavLink(props.url)}}
          sx={[
            { color: 'primary.main', borderColor: 'primary.main' },
            (theme) => ({
              '&:hover': {
                color: 'black',
                bgcolor: 'primary.main',
              },
            }),
          ]}
        >
        {props.label}
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default NavLink;