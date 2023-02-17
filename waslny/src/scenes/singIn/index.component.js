import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  ScrollView,
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
import { Text, Button} from 'react-native-paper';
import { FONT_FAMILY } from '../../constants/FONT';
import MainContainer from '../../components/Continers/MainContainer.component';
import CText from '../../components/CText';

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
    <MainContainer>
      <Text>heeeeee</Text>
    </MainContainer>
  );
};

export default SignIn;
