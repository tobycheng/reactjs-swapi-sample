import ReactDOM from "react-dom/client";

import CircularLoad from "./components/CircularLoad";
import ResultContainer from "./components/ResultContainer";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import { DropdownContext } from "./context/DropdownContext";

import baseTheme from "./styles/baseTheme";

import {
  Box,
  CssBaseline
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


const SWAPI = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <DropdownContext>
        <Box textAlign="center">
          <CircularLoad />
          <Title />
          <SearchBar />
          <ResultContainer />
        </Box>
      </DropdownContext>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SWAPI />);