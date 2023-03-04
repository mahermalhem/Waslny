import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';


const StackHome = createStackNavigator();

const StackAuth = createStackNavigator();

const Stack = createStackNavigator();

function AppInit({navigation},props) {

  return (
    <View>
      <Button title='LogOUT' onPress={()=>{
        console.log(auth().currentUser?.email)
        auth().signOut()
      }}> </Button>
    </View>
  );
}

export default AppInit;