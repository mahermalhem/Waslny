import  React , {useEffect,Component,useState} from 'react';
import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import all locales
import en from './en.json';
import ar from './ar.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
//I18n.defaultLocale = 'en'; added and commented

// Define the supported translations
I18n.translations = {
  en,
  ar
};

export  const currentLocale = I18n.currentLocale();

// Is it a RTL language?
/*
export async function  isRTL (){
  if(await AsyncStorage.getItem('local') == 'ar'){
    return true //true
  }else{
    return false //false
  }
}
*/
export const isRTL= currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
//ReactNative.I18nManager.allowRTL(isRTL);
ReactNative.I18nManager.allowRTL(true);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};


export const saveLanguage = async (newLang) => {
    if(newLang){
      await AsyncStorage.setItem('local',newLang)
    }else{
      await AsyncStorage.setItem('local','en')
    }
};

export default I18n;