import { useDropdownContext } from "../context/DropdownContext";

import {
  Backdrop
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


const CircularLoad = () => {
  const {isLoading} = useDropdownContext();
  return (
    <Backdrop
    open={isLoading}
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress />
    </Backdrop>
  )
}

export default CircularLoad;