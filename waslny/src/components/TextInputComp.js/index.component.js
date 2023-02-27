import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput,Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TextInputComp = (props) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const {label,placeholder,leftIcon,isPassword} = props
  const [text, setText] = React.useState("");
  const [isSecurePass, setIsSecurePass] = React.useState(isPassword);

  const chagneSecure=()=>{
    setIsSecurePass(!isSecurePass)
  }
  return (
    <TextInput
      label="Email"
      value={text}
      secureTextEntry={isSecurePass}
      onChangeText={text => setText(text)}
      placeholder={'Email'}
      style={style.textInput}
      mode="outlined"
      outlineColor={theme.colors.SUN_FLOWER}
      activeOutlineColor={theme.colors.SUN_FLOWER}
      theme={{ roundness: 16 }}
      left={
        isPassword
        ?<TextInput.Icon
          onPress={chagneSecure}
          icon={isSecurePass?'eye-off':'eye'}
          iconColor={theme.colors.SUN_FLOWER}
          style={style.leftIcon}
          size={wp(7)}
        />
        :<TextInput.Icon
          onPress={isPassword && chagneSecure}
          icon={leftIcon}
          iconColor={theme.colors.SUN_FLOWER}
          style={style.leftIcon}
          size={wp(7)}
        />
      }
    />
  );
};

export default TextInputComp;