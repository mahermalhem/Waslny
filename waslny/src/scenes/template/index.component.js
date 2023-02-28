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
import styles from './index.style';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import {useDispatch, useSelector} from 'react-redux';
import {hideLoader, showLoader} from '../../redux/actions/loaderAction';
import {changeLanguageMethod} from '../../redux/actions/languageAction';
import {saveLanguage, strings} from '../../locales/I18n';

const signInMethod = () => {
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

  const dispatch = useDispatch();
  const isRTL = useSelector(state => state.languageReducer.isRtl);
  const appLanguage = useSelector(state => state.languageReducer.appLanguage);

  return (
    <View style={style.body}>
      <Text style={style.title}>Home Screen</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        lorem enim. Etiam accumsan nibh eu laoreet sollicitudin. Proin
        ultricies, metus nec auctor ultricies, dui metus vulputate odio, id
        hendrerit lectus mauris a ex. {isRTL?"true":"false"} {appLanguage}
        {strings('common.noRequests')}
      </Text>
      <Text style={style.referralCode}>3XP4N510</Text>
      <Button onPress={() => {
        dispatch(showLoader())
        theme.toggleTheme()
        setTimeout(() => {
          dispatch(hideLoader())
        }, 3500);
      }} title="Accept" color={theme.colors.SUCCESS} />
      <Button onPress={() => {
         dispatch(changeLanguageMethod({appLanguage: 'ar'}));
         saveLanguage('ar');
      }} title="Decline" color={theme.colors.ERROR} />
       <Button onPress={() => {
         dispatch(changeLanguageMethod({appLanguage: 'en'}));
         saveLanguage('en');
      }} title="Decline" color={theme.colors.ERROR} />

      //change theme
      <Button onPress={async () => {

      await AsyncStorage.setItem('choosenTheme',colors.Mode.Light)
        theme.toggleTheme()
      }} title="Decline" color={theme.colors.ERROR} />

    </View>
  );
};

export default SignIn;
