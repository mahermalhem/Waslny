import React, {useState} from 'react';
import { Appearance } from 'react-native'
import {colors} from '../styles/colors';
import {typography} from '../styles/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  // const toggleTheme = () => setLightTheme(previousState => !previousState);
  const toggleTheme = () => setTheme();

  React.useEffect(() => {
    console.log('phone theme mode: ',Appearance.getColorScheme().toString())
    setTheme()
  }, [])

  //Based on device mode && Saved user choosen theme
  const setTheme =async ()=>{
    let choosenTheme = await AsyncStorage.getItem('choosenTheme')
    if(choosenTheme){
      if(choosenTheme == 'dark'){
        setLightTheme(false)
      }else{
        setLightTheme(true)
      }
    }else{
      Appearance.getColorScheme().toString() == 'dark' ?setLightTheme(false) : null
    }
  }

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
