import * as React from 'react';
import {ScrollView, View} from 'react-native';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';

const FormicContainer = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const {label, placeholder, leftIcon, isPassword} = props;
  const [text, setText] = React.useState('');
  const [isSecurePass, setIsSecurePass] = React.useState(isPassword);

  const chagneSecure = () => {
    setIsSecurePass(!isSecurePass);
  };
  return (
    <ScrollView style={style.scroll}>
      <View style={style.view}>
        {props.children}
      </View>
    </ScrollView>
  );
};

export default FormicContainer;
