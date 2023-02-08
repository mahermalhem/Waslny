import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import SceneName from '../SceneName';
import styles from './/';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';

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

const SignIn = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.body}>
      <Text style={style.title}>Home Screen</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        lorem enim. Etiam accumsan nibh eu laoreet sollicitudin. Proin
        ultricies, metus nec auctor ultricies, dui metus vulputate odio, id
        hendrerit lectus mauris a ex.
      </Text>
      <Text style={style.referralCode}>3XP4N510</Text>
      <Button onPress={() => {}} title="Accept" color={theme.colors.SUCCESS} />
      <Button onPress={() => {theme.toggleTheme()}} title="Decline" color={theme.colors.ERROR} />
    </View>
  );
};

export default SignIn;
