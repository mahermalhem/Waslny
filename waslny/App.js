import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import AppInit from './src/scenes/AppInit';

const App = () => {


  return (
    <SafeAreaView style={{flex:1,backgroundColor:"transparent"}}>
      <AppInit/>
    </SafeAreaView>
  );
};

export default App;
