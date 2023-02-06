import * as React from 'react';

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
