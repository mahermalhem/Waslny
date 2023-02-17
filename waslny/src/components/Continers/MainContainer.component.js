import { View, Text, StyleSheet } from 'react-native';
import React, { Children } from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import { FONT_FAMILY } from '../constants/FONT';
import { strings } from '../locales/I18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../styles/colors';
import styles from './MainContainer.styles';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';

const MainContainer = (props) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
  
    return (
        <View style={style.body}>
            {props.children}
        </View>
    );
};

export default MainContainer;
