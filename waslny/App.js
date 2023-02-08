import React, {useEffect, useState} from 'react';
import {Button, TextInput, View, Appearance, StyleSheet, Text, FlatList, StatusBar} from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import AppInit from './src/AppInit';
import {FirebaseAppCheck} from '@capacitor-firebase/app-check';
import {getApp} from 'firebase/app';
import {initializeAppCheck, CustomProvider} from 'firebase/app-check';
import firebase from '@react-native-firebase/app';
import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SplashScreen from 'react-native-splash-screen'
import AuthStack from './src/AuthStack';
import NetInfo from "@react-native-community/netinfo";
import AppNotConnected from './src/components/AppNotConnected';
import useTheme from './src/theme/useTheme';
import { colors } from './src/styles/colors';


const App = ()=> {
  const theme = useTheme();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.isConnected, state.type);
      setIsConnected(state.isConnected)
    });
  }, [])

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  return (
    <ThemeProvider>
      <StatusBar backgroundColor={colors.light.BACKGROUND} barStyle={"dark-content" } />
      {!isConnected
        ? <AppNotConnected />
        : null
      }
      {!user 
          ?<AuthStack/>
          :<AppInit/>
      }
    </ThemeProvider>
  );
}

export default App;
