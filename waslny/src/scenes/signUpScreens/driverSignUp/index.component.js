import React, {useCallback, useState, useRef} from 'react';
import {ScrollView, View, Alert, Button, TouchableOpacity} from 'react-native';
import SceneName from '../../SceneName';
import styles from './index.style';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import {useDispatch, useSelector} from 'react-redux';
import {saveLanguage, strings} from '../../../locales/I18n';
import MainContainer from '../../../components/Continers/MainContainer.component';
import * as yup from 'yup';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderComp from '../../../components/Header/index.component';
import RoundButtonComp from '../../../components/RoundButtonComp/index.component';

const DriverSignUp = ({navigation}) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const emailFormRef = useRef();
  const phoneFormRef = useRef();
  const forgetPasswordFormicRef = useRef();

  const dispatch = useDispatch();
  const isRTL = useSelector(state => state.languageReducer.isRtl);
  const appLanguage = useSelector(state => state.languageReducer.appLanguage);

  const [loginType, setLoginType] = React.useState('1');

  let schema = yup.object().shape({
    email: yup
      .string()
      .email(strings('signIn.pleaseEnterValidEmail'))
      .required(strings('signIn.emailIsRequired')),
    password: yup.string().required(strings('signIn.passwordIsRequired')),
  });

  const phoneRegExp = /^07[789][0-9]{7}([0-9]{2})?$/;

  let schemaPhone = yup.object().shape({
    phoneNumber: yup
      .string()
      .required(strings('signIn.phoneNumberIsRequired'))
      .matches(phoneRegExp, strings('signIn.phoneNumberInstruction')),
  });

  return (
    <MainContainer Cstyle={{}}>
      <HeaderComp
        navigation={navigation}
        backButton
        title={strings('headers.driverSignUp')}
      />
    </MainContainer>
  );
};

export default DriverSignUp;
