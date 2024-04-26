import { useState } from "react";

import sendRequest from "./SendRequest";
import { useDropdownContext } from "../context/DropdownContext";

import {
  Box,
  Pagination,
} from '@mui/material';

const NavLink = (props) => {
  const [page, setPage] = useState(1);
  const {dropdownValue, setResponse, setIsLoading} = useDropdownContext();

  const handlePagechange = async (event, value) => {
    setPage(value);

    setIsLoading(true)
    const baseUrl = "https://swapi.py4e.com/api/"+dropdownValue+"/?page="+value;
    const resp = await sendRequest(baseUrl)
    setResponse(resp)
    setIsLoading(false)
  }

  return (
    <Box display="flex" justifyContent="center">
      <Pagination 
      count={Number.parseInt(props.response.count/10) + 1}
      page={page}
      onChange={handlePagechange}
      />
    </Box>
  )
}

export default NavLink;