import React, {useEffect, useState} from 'react';
import {Button, TextInput, View, StyleSheet, Text, FlatList, StatusBar} from 'react-native';
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

function App() {
    
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  return (
    <ThemeProvider>
        <StatusBar backgroundColor={'red'} barStyle="light-content" />
      {/* {!isConnected
        ? <AppNotConnected />
        : null
      } */}
      {
        !user 
          ?<AuthStack/>
          :<AppInit/>
      }
    </ThemeProvider>
  );
}

export default App;
