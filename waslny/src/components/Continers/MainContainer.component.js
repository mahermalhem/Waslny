import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, {Children} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {FONT_FAMILY} from '../constants/FONT';
import {strings} from '../locales/I18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../styles/colors';
import styles from './MainContainer.styles';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';

const MainContainer = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const disKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={disKeyboard}>
      <View style={style.body}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

export default MainContainer;
