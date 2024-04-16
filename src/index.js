import ReactDOM from "react-dom/client";

import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";

import { DropdownContext } from "./context/DropdownContext";

import "./styles/main.scss";

const SWAPI = () => {
  return (
    <div className="grid-container">
      <DropdownContext>
        <SearchBar />
        <Cards />
      </DropdownContext>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SWAPI />);