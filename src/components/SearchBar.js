import sendRequest from "./SendRequest";

import baseTheme from "../styles/baseTheme";
import { useDropdownContext } from "../context/DropdownContext";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const mySelectTheme = createTheme(baseTheme, {
  components: {
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: baseTheme.palette.primary.main,
        }
      },
    },
  }
})

const SearchBar = () => {
  const selectOptions = ["Films", "People", "Planets", "Species", "Starships", "Vehicles"]
  const {dropdownValue, setDropdownValue, setResponse, setIsLoading} = useDropdownContext();
  
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value)
    setResponse({})
  };

  const handleSearch = async (value) => {
    const url =  "https://swapi.py4e.com/api/"+value+"/";
    setIsLoading(true)
    const resp = await sendRequest(url)
    setResponse(resp)
    setIsLoading(false)
  }

  return (
    <ThemeProvider theme={mySelectTheme}>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={dropdownValue}
            label="Category"
            onChange={handleDropdownChange}
          >
            {selectOptions.map((option)=>(
              <MenuItem key={option.toLowerCase()} value={option.toLowerCase()}>{option}</MenuItem>
            ))}
          </Select>
          <Button 
          variant="contained" 
          onClick={()=>handleSearch(dropdownValue)}
          startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}

export default SearchBar;