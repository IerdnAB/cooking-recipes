import { createContext } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


    //custom logic here 

    
    return (
        <ThemeContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemeContext.Provider>
    )
}

