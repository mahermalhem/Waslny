import * as React from 'react';
import Toast from 'react-native-toast-message';

const isNullOrEmpty = text => {
  if (text === null || text === undefined) {
    return true;
  } else {
    text = text.toString();
    return !text || text.toString().replace(/\s/g, '').length === 0;
  }
};

export {isNullOrEmpty};

export const BANNER_H = 350;
export const TOPNAVI_H = 50;

export const AuthContext = React.createContext();

export const showToast = (type, message1, message2) => {
  Toast.show({
    type: type == 1 ? 'success' : type == 2 ? 'error' : "info",
    text1: message1,
    text2:message2,
    autoHide: true,
  });
}