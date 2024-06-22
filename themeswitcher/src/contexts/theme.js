import {createContext, useContext} from 'react';



export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}

});


export const ThemeProvider = ThemeContext.Provider;


export default function usetheme () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(ThemeContext);
}
