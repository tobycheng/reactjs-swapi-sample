import { useState, createContext, useContext } from "react";

const dropdownContext = createContext();

export function useDropdownContext() {
  return useContext(dropdownContext);
}

export function DropdownContext ({ children }) {
  const [dropdownValue, setDropdownValue] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);


  return (
    <dropdownContext.Provider value={{dropdownValue, setDropdownValue: setDropdownValue, response, setResponse: setResponse, loading, setLoading: setLoading}}>
      {children}
    </dropdownContext.Provider>
  );
}