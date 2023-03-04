import React, { useCallback, useState, useRef } from 'react';
import { ScrollView, View, Alert, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import SceneName from '../SceneName';
import styles from './index.style';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, showLoader } from '../../redux/actions/loaderAction';
import { changeLanguageMethod } from '../../redux/actions/languageAction';
import { saveLanguage, strings } from '../../locales/I18n';
import { Text, RadioButton } from 'react-native-paper';
import { FONT_FAMILY } from '../../constants/FONT';
import MainContainer from '../../components/Continers/MainContainer.component';
import CText from '../../components/CText';
import { TextInput } from 'react-native-paper';
import TextInputComp from '../../components/TextInputComp.js/index.component';
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormicContainer from '../../components/FormicContainer.js/index.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../styles/colors';
import ButtonComp from '../../components/ButtonComp/index.component';
import Lottie from 'lottie-react-native';
import { AllAnimation } from '../../constants/Animations';
import LogoComp from '../../components/LogoComp/index.component';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { showToast } from '../../utils/helpers';
import OtpInputs from 'react-native-otp-inputs';


const signInByEmail = (email, password) => {
  console.log('email pass', email, password)
  try {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            showToast(2, strings("firebaseErrors.emailAlreadyInUse")); break;
          case 'auth/wrong-password':
            showToast(2, strings("firebaseErrors.wrongPassword")); break;
          case 'auth/user-not-found':
            showToast(2, strings("firebaseErrors.userNotFound"));
            break;
        }
      });
  } catch (error) {
    console.log("catch sign In Screen", error)
  }
};

const SignIn = ({navigation}) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const emailFormRef = useRef();
  const phoneFormRef = useRef();

  const dispatch = useDispatch();
  const isRTL = useSelector(state => state.languageReducer.isRtl);
  const appLanguage = useSelector(state => state.languageReducer.appLanguage);

  const signInByPhone = (phoneNumber) => {
    let sendTo="+962"+ phoneNumber.substring(1)
    console.log(sendTo)
    navigation.navigate(SceneName.PinCode,{
      phoneNumber:sendTo
    })
  }
  
  const [loginType, setLoginType] = React.useState('1');

  let schema = yup.object().shape({
    email: yup
      .string()
      .email(strings('signIn.pleaseEnterValidEmail'))
      .required(strings('signIn.emailIsRequired')),
    password: yup.string().required(strings('signIn.passwordIsRequired'))
  });

  const phoneRegExp = /^07[789][0-9]{7}([0-9]{2})?$/

  let schemaPhone = yup.object().shape({
    phoneNumber: yup.string().required(strings('signIn.phoneNumberIsRequired')).matches(phoneRegExp,strings('signIn.phoneNumberInstruction'))
  });

  return (
    <MainContainer>
      <Toast />
      <View style={{ margin: wp(3), alignItems: 'center', justifyContent: 'center', width: '20%', alignSelf: isRTL ? "flex-end" : 'flex-start' }}>
        <CText onPress={() => {
          dispatch(changeLanguageMethod({ appLanguage: isRTL ? 'en' : 'ar' }));
          saveLanguage(isRTL ? 'en' : 'ar')
        }} color={theme.colors.TEXT_TEXT_SECONDARY}>{strings('common.language')}</CText>
      </View>
      <LogoComp />
      <RadioButton.Group onValueChange={newValue => setLoginType(newValue)} value={loginType}>
        <View style={{ width: '85%', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <Text style={style.text}>{strings('signIn.areU')} : </Text>
          <RadioButton value="1" />
          <Text style={style.text}>{strings('signIn.driver')}</Text>
          <RadioButton value="2" />
          <Text style={style.text}>{strings('signIn.customer')}</Text>
        </View>
      </RadioButton.Group>
      {loginType == 1
        ? <Formik
          innerRef={emailFormRef}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log('values', values);
            signInByEmail(values.email, values.password)
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
                placeholder={strings('common.email')}
                leftIcon="email-outline"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errorMsg={errors.email}
                textColor={theme.colors.PRIMARY}
                iconColor={theme.colors.PRIMARY}
              />
              <TextInputComp
                placeholder={strings('common.password')}
                isPassword
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorMsg={errors.password}
                textColor={theme.colors.PRIMARY}
                iconColor={theme.colors.PRIMARY}
              />
              <ButtonComp label={strings('signIn.login')} onPress={handleSubmit} />
            </FormicContainer>
          )}
        </Formik>
        : <Formik
          innerRef={phoneFormRef}
          initialValues={{
            phoneNumber: null ,
          }}
          onSubmit={values => {
            console.log('values', values);
            signInByPhone(values.phoneNumber)
          }}
          validationSchema={schemaPhone}>
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
                placeholder={strings('common.phoneNumber')}
                leftIcon="phone"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                errorMsg={errors.phoneNumber}
                textColor={theme.colors.PRIMARY}
                iconColor={theme.colors.PRIMARY}
                keyboardType="decimal-pad"
              />
              <ButtonComp label={strings('signIn.login')} onPress={handleSubmit} />
            </FormicContainer>
          )}
        </Formik>
      }
      <CText style={style.text} onPress={() => { console.log('tes') }} color={theme.colors.TEXT_TEXT_SECONDARY}>{strings('signIn.forgetPassword')}</CText>
      <CText style={style.text} color={theme.colors.TEXT_TEXT_SECONDARY}>{strings('signIn.dontHaveAnAccount')}
        <Text style={[styles.text,{ color : 'blue'}]}> {strings('signIn.signUp')}</Text>
      </CText>
     
    </MainContainer>
  );
};

export default SignIn;
