import * as React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {TextInput, Text, Button, IconButton, Appbar} from 'react-native-paper';
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

const HeaderComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const {title, backButton, navigation} = props;

  return (
    <Appbar.Header style={style.header}>
      {backButton && (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
      {title && <Appbar.Content title={title} />}
    </Appbar.Header>
  );
};

export default HeaderComp;
