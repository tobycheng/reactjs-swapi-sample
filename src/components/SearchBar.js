import sendRequest from "./SendRequest";
import { useDropdownContext } from "../context/DropdownContext";


const LoadBar = () => {
  const {loading} = useDropdownContext();
  return (!loading) ? <></> : (
    <>
      <div></div>
      <div className="loadbar">Loading...</div>
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
      <div>
        <select value={dropdownValue} onChange={handleDropdownChange}>
          {options.map((option)=>(
            <option value={option.value}>{option.text}</option>
          ))}
        </select>

        <button onClick={()=>handleSearch(dropdownValue)}>Search</button>
      </div>
      <div></div>
      <LoadBar />
    </>
  )
}

export default SearchBar;