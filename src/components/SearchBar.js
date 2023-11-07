import sendRequest from "./SendRequest";
import { useDropdownContext } from "../context/DropdownContext";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const selectTheme = createTheme({
  palette: {
    primary: {
      main: '#FFE81F',
      dark: '#b2a215',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFE81F'
        }
      }
    },
    MuiBaseInput: {
      styleOverrides: {
        root: {
          border: '1px #FFE81F'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#FFE81F',
          border: '1px #FFE81F',
        },
        select: {
          ":hover": {
            backgroundColor: "#b2a215",
            // border: '2px solid #b2a215',
          },
        },
      },
    },
    MuiList: {
      styleOverrides:{
        root: {
          color: '#FFE81F',
          backgroundColor: "black",
        }
      }
    },
  }
})

const LoadBar = () => {
  const {loading} = useDropdownContext();
  return (!loading) ? <></> : (
    <>
      <div></div>
      <div className="loadbar">Loading....</div>
      <div></div>
    </>
  )
}

function SearchBar() {
  const options = [
    {text: "Films", value:"films"},
    {text: "People", value:"people"},
    {text: "Planets", value:"planets"},
    {text: "Species", value:"species"},
    {text: "Starships", value:"starships"},
    {text: "Vehicles", value:"vehicles"},
  ]
  const {dropdownValue, setDropdownValue, setResponse, setLoading} = useDropdownContext();
  
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value)
    setResponse({})
  };

  const handleSearch = async (value) => {
    const url =  "https://swapi.dev/api/"+value+"/";
    setLoading(true)
    const resp = await sendRequest(url)
    setResponse(resp)
    setLoading(false)
  }

  return (
    <>
      <div></div>
      <div><h1 style={{'textAlign': 'center'}}>ReactJS + Star Wars API</h1></div>
      <div></div>

      <div></div>
      <div style={{'textAlign': 'center'}}>

        <ThemeProvider theme={selectTheme}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dropdownValue}
                label="Category"
                onChange={handleDropdownChange}
              >
                {options.map((option)=>(
                  <MenuItem value={option.value}>{option.text}</MenuItem>
                ))}
              </Select>
              <Button variant="contained" onClick={()=>handleSearch(dropdownValue)}>Search</Button>
            </FormControl>
          </Box>
        </ThemeProvider>
      </div>
      <div></div>

      <LoadBar />
    </>
  )
}

export default SearchBar;