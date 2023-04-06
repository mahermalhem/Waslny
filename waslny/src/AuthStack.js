import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SceneName from './scenes/SceneName';
import SignIn from './scenes/signIn/index.component';
import PinCode from './scenes/pinCode/index.component';
import ToastComp from './components/ToastComp/index.component';
import SignUp from './scenes/signUp/index.component';

const StackHome = createStackNavigator();

const StackAuth = createStackNavigator();

const Stack = createStackNavigator();

function AuthStack({navigation}, props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={SceneName.SignIn}
          component={SignIn}
          options={{
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen
          name={SceneName.SignUp}
          component={SignUp}
          options={{
            title: 'Sign up',
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen
          name={SceneName.PinCode}
          component={PinCode}
          options={{
            title: 'Pin code',
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: 'push',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthStack;
