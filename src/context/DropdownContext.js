import { useState, createContext, useContext } from "react";

const dropdownContext = createContext();

export function useDropdownContext() {
  return useContext(dropdownContext);
}

export function DropdownContext ({ children }) {
  const [dropdownValue, setDropdownValue] = useState("films");
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  return (
    <dropdownContext.Provider value={
      {
        dropdownValue, 
        setDropdownValue: setDropdownValue, 
        response, 
        setResponse: setResponse, 
        isLoading, 
        setIsLoading: setIsLoading
      }
      }>
      {children}
    </dropdownContext.Provider>
  );
}