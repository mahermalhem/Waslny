import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FONT_FAMILY } from '../../constants/FONT';

const styles = theme =>
  StyleSheet.create({
    button: {
      width: '80%',
      marginBottom: wp(3),
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: 'bold',
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
    },
  });

export default styles;
