import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY} from '../../constants/FONT';

const styles = theme =>
  StyleSheet.create({
    button: {
      margin: wp(2),
      padding: wp(2),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.PRIMARY,
      opacity: 0.789,
    },
    text: {
      fontFamily: FONT_FAMILY,
      color: theme.colors.TEXT,
      fontWeight: 'bold',
    },
  });

export default styles;
