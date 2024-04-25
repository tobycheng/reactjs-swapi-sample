import { useDropdownContext } from "../context/DropdownContext";
import baseTheme from "../styles/baseTheme";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ResultCards = () => {
  const typeKeys = {
    "films": ["title", "episode_id", "director", "producer", "release_date", "opening_crawl"],
    "people": ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"],
    "planets": ["name", "diameter", "rotation_period", "orbital_period", "gravity", "population", "climate", "terrain", "surface_water"],
    "species": ["name", "classification", "designation", "average_height", "average_lifespan", "eye_colors", "hair_colors", "skin_colors", "language", "homeworld"],
    "starships": ["name", "model", "starship_class", "manufacturer", "cost_in_credits", "length", "crew", "passengers", "max_atmosphering_speed", "hyperdrive_rating", "MGLT", "cargo_capacity", "consumables"],
    "vehicles": ["name", "model", "vehicle_class", "manufacturer", "length", "cost_in_credits", "crew", "passengers", "max_atmosphering_speed", "cargo_capacity", "consumables"],
  }
  const {dropdownValue, response} = useDropdownContext();

  const AccordionSummaryTheme = createTheme(baseTheme, {
    components: {
      MuiAccordionSummary: {
        styleOverrides: {
          content: {
            justifyContent: "center",
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={AccordionSummaryTheme}>
      {response.results.map((result)=>{
        return (
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
              <h2>{(dropdownValue === "films") ? result["title"] : result["name"]}</h2>
            </AccordionSummary>
            <AccordionDetails>
              {typeKeys[dropdownValue].map((key)=>{
                return <div>{key.replaceAll("_", " ")}: {result[key]}</div>
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </ThemeProvider>
  )
  // return (Object.keys(response).length === 0) ? <></> : (
  //   <>
  //     {response.results.map((result)=>{
  //       return (
  //         <>
  //         <div></div>
  //         <div className="card">
  //           <div className="card-inner">
  //             <div className="card-front">
  //               <h1>{(dropdownValue === "films") ? result["title"] : result["name"]}</h1>
  //             </div>
  //             <div className="card-back">
  //               {typeKeys[dropdownValue].map((key)=>{
  //                 return <div>{key.replaceAll("_", " ")}: {result[key]}</div>
  //               })}
  //             </div>
  //           </div>
  //         </div>
  //         <div></div>
  //         </>
  //       )
  //     })}
  //   </>
  // )
}

export default ResultCards;