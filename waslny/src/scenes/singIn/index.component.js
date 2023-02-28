import React, {useCallback, useState, useRef} from 'react';
import {ScrollView, View, Alert, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import SceneName from '../SceneName';
import styles from './index.style';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import {useDispatch, useSelector} from 'react-redux';
import {hideLoader, showLoader} from '../../redux/actions/loaderAction';
import {changeLanguageMethod} from '../../redux/actions/languageAction';
import {saveLanguage, strings} from '../../locales/I18n';
import {Text,} from 'react-native-paper';
import {FONT_FAMILY} from '../../constants/FONT';
import MainContainer from '../../components/Continers/MainContainer.component';
import CText from '../../components/CText';
import {TextInput} from 'react-native-paper';
import TextInputComp from '../../components/TextInputComp.js/index.component';
import {object, string, number, date, InferType} from 'yup';
import {Formik} from 'formik';
import * as yup from 'yup';
import FormicContainer from '../../components/FormicContainer.js/index.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../styles/colors';

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
  const formRef = useRef();
  const dispatch = useDispatch();
  const isRTL = useSelector(state => state.languageReducer.isRtl);
  const appLanguage = useSelector(state => state.languageReducer.appLanguage);
  const [text, setText] = React.useState('');

  let schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a name more than 4 characters')
      .required('test erro req'),
    password: yup.string().required('pass req')
  });

  return (
    <MainContainer>
      <Button onPress={async () => {
        dispatch(showLoader())
      
        setTimeout(() => {
          dispatch(hideLoader())
        }, 3500);
      }} title="Accept" color={theme.colors.SUCCESS} />
      <Formik
        innerRef={formRef}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          console.log('values', values);
        }}
        validationSchema={schema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <FormicContainer>
            <TextInputComp
              placeholder={'Email'}
              leftIcon="email-outline"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorMsg={errors.email}
              textColor={theme.colors.PRIMARY}
              iconColor={theme.colors.PRIMARY}
            />
            <TextInputComp
              placeholder={'Password'}
              isPassword
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMsg={errors.password}
              textColor={theme.colors.PRIMARY}
              iconColor={theme.colors.PRIMARY}
            />
            {/* <Button title='test' onPress={handleSubmit}/> */}
          </FormicContainer>
        )}
      </Formik>
    </MainContainer>
  );
};

export default SignIn;
