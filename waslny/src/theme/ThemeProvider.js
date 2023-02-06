import React, {useState} from 'react';
import { Appearance } from 'react-native'
import {colors} from '../styles/colors';
import {typography} from '../styles/typography';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);
  React.useEffect(() => {
    console.log('phone theme mode: ',Appearance.getColorScheme().toString())
    Appearance.getColorScheme() === 'dark' ? setLightTheme(false) : null
  }, [])
  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    toggleTheme,
    isLightTheme,
  };
  
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
