import { createContext, useContext } from "react";

export const ThemeContext = createContext({ // these are just default values // used when there is no contextProvider present
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

// custom hook created
export default function useTheme(){
    return useContext(ThemeContext);
}