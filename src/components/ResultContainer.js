import NavLink from './NavLink';
import ResultCards from './ResultCards';
import { useDropdownContext } from "../context/DropdownContext";

import { Box } from '@mui/material';


const ResultContainer = () => {
  const {response} = useDropdownContext();
  console.log(response)

  return (Object.keys(response).length === 0) ? (
    <>No data</>
  ) : (
    <Box>
      <NavLink prevUrl={response.previous} nextUrl={response.next} />
      <ResultCards />
    </Box>
  )
}

export default ResultContainer;