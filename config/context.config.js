"use client"
import { createContext,useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [loanDocId,setLoanDocId] = useState(null);

    return (
        <AppContext.Provider value={{loanDocId,setLoanDocId}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext,AppProvider }