import { Button } from '@rneui/base';
import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import SceneName from '../SceneName'
import styles from './signIn.style'

const signIn = () => {
    auth()
      .signInWithEmailAndPassword('maher.malhem2@gmail.com', '12345678')
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error.code);
        //auth/wrong-password
        //auth/user-not-found
        //auth/configuration-not when not enable email and pass NVM
      });
  };

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>hello singIn</Text>
        <Button title={"Log in "} onPress={()=>{
            signIn()
        }}/>
        <Button title={"SingUP"} onPress={()=>{
            navigation.navigate(SceneName.SignUp)
        }}/>
        <View>

        </View>
        <Text style={styles.welcome}>hello</Text>
    </View>
  );
};

export default SignIn;
