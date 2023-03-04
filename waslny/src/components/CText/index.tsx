import {
  View,
  Text,
  TextStyle,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import { FONT_FAMILY } from '../../constants/FONT';

type Props = TextProps & {
  fontFamily?: string;
  fontSize?: number | undefined;
  style?: TextStyle | TextStyle[];
  color?: string;
};

const CText = (props: Props) => {

  const {
    fontFamily=FONT_FAMILY,
    fontSize = 16,
    color,
    style,
    children,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <Text
        style={[
          {
            fontFamily: fontFamily,
            fontSize: RFValue((fontSize - 2) as number),
            letterSpacing: 0.5,
            color: color,
          },
          style,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CText;
