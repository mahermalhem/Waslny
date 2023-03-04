import * as React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '../../styles/colors';

const TextInputComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const { label,textColor,keyboardType , iconColor, value, onBlur, placeholder, leftIcon, isPassword, errorMsg, onChangeText } = props;
  const [isSecurePass, setIsSecurePass] = React.useState(isPassword);

  const chagneSecure = () => {
    setIsSecurePass(!isSecurePass);
  };
  const showError = () => {
    Alert.alert(errorMsg.toString())
  }

  return (
    <TextInput
      label={label ? label : placeholder}
      textColor={textColor}
      value={value}
      secureTextEntry={isSecurePass}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder}
      style={style.textInput}
      mode="outlined"
      outlineColor={iconColor}
      activeOutlineColor={iconColor}
      theme={{ roundness: wp(5) }}
      keyboardType={keyboardType}
      left={
        isPassword ? (
          <TextInput.Icon
            onPress={chagneSecure}
            icon={isSecurePass ? 'eye-off' : 'eye'}
            iconColor={iconColor}
            size={wp(7)}
          />
        ) : (
          <TextInput.Icon
            onPress={isPassword && chagneSecure}
            icon={leftIcon}
            iconColor={iconColor}
            size={wp(7)}
          />
        )
      }
      right={errorMsg && <TextInput.Icon
        onPress={showError}
        icon={'alert'}
        iconColor={colors.light.ERROR}
        size={wp(7)}
      />}
    />
  );
};

export default TextInputComp;
