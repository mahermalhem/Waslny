import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY} from '../../constants/FONT';

const styles = theme =>
  StyleSheet.create({
    button: {
      width: '80%',
      marginBottom: wp(3),
      alignSelf: 'center',
    },
    text: {
      fontFamily: FONT_FAMILY,
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.S,
      fontWeight: 'bold',
    },
    header: {
      width: '100%',
      backgroundColor: theme.colors.BACKGROUND,
    },
  });

export default styles;
