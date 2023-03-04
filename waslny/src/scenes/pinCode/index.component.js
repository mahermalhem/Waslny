import React, { useCallback, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, showLoader } from '../../redux/actions/loaderAction';
import { changeLanguageMethod } from '../../redux/actions/languageAction';
import { saveLanguage, strings } from '../../locales/I18n';
import MainContainer from '../../components/Continers/MainContainer.component';
import CText from '../../components/CText';
import Toast from 'react-native-toast-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LogoComp from '../../components/LogoComp/index.component';
import OtpInputs from 'react-native-otp-inputs';
import ButtonComp from '../../components/ButtonComp/index.component';
import { IconButton } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { showToast } from '../../utils/helpers';




const PinCode = ({ route, navigation }) => {
  const [confirm, setConfirm] = useState(null);

  const back = () => {
    navigation.goBack()
  }  

  useEffect(() => {
    let number=route.params?.phoneNumber
    console.log('tedst',number)
    if(number){
      signInWithPhoneNumber(number)
    }
  })

  const theme = useTheme();
  const style = useThemedStyles(styles);

  const dispatch = useDispatch();
  const isRTL = useSelector(state => state.languageReducer.isRtl);
  const appLanguage = useSelector(state => state.languageReducer.appLanguage);

  async function signInWithPhoneNumber(phoneNumber) {
    dispatch(showLoader())
    setTimeout(() => {
      dispatch(hideLoader());
    }, 1500);
    auth().setLanguageCode(isRTL ? 'ar' : 'en');
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber); //phoneNumber
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  }
  const verify = async (code) => {
    console.log('verify', route.params?.phoneNumber, "code", code)
    if (code.length == 6) {
      console.log('verify', route.params?.phoneNumber, "code", code)
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log(error);
        showToast(2, error.code,error);
        // switch (error.code) {
        //   case 'auth/unknown':
        //     showToast(2, strings("firebaseErrors.noPhoneUser")); break;
        // }
        //[Error: [auth/unknown] Cannot create PhoneAuthCredential without either verificationProof, sessionInfo, temporary proof, or enrollment ID.]
      }
    }
  }

  return (
    <MainContainer>
      <Toast />
      <IconButton
        icon='arrow-left-box'
        iconColor={theme.colors.TEXT}
        size={wp(12)}
        style={{ alignSelf: 'flex-start' }}
        onPress={back}
      />
      <CText style={[{ marginTop: wp(10),marginHorizontal:wp(1) }, style.text]} color={theme.colors.TEXT_TEXT_SECONDARY}>{strings('verify.EnterPinCodeRecivedOnYourPhone')}</CText>
      <OtpInputs
        keyboardType={'phone-pad'}
        inputContainerStyles={style.otpInputCont}
        inputStyles={{
          fontSize: 15,
          color: theme.colors.BACKGROUND
        }}
        focusStyles={{
          borderColor: theme.colors.SUCCESS,
          backgroundColor: theme.colors.SUCCESS,
        }}
        handleChange={verify}
        numberOfInputs={6}
        selectTextOnFocus={false}
      />
      <View style={style.verBtnContainer}>
        <ButtonComp label={strings('verify.verify')} onPress={verify} />
      </View>
    </MainContainer>
  );
};

export default PinCode;
