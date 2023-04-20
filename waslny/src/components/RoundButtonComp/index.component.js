import * as React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {TextInput, Text, Button, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../styles/colors';
import {FONT_FAMILY} from '../../constants/FONT';

const RoundButtonComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const {label, icon, size = 100, onPress} = props;

  return (
    <TouchableOpacity
      style={[
        style.button,
        {width: size, height: size, borderRadius: size / 2},
      ]}
      onPress={onPress}
      uppercase>
      <Text numberOfLines={2} style={style.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundButtonComp;
