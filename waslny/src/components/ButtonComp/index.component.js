import * as React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { TextInput, Text, Button ,IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '../../styles/colors';
import { FONT_FAMILY } from '../../constants/FONT';

const ButtonComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const { label, textColor, icon, errorMsg, onPress } = props;

  return (
    <Button 
      icon={icon}
      mode="elevated"
      textColor={theme.colors.TEXT}
      style={style.button}
      onPress={onPress}
      >
        <Text style={style.text}>{label}</Text>
    </Button>
  );
};

export default ButtonComp;
