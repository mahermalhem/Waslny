import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT_FAMILY} from '../../../constants/FONT';

const styles = theme =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: 'bold',
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
      fontFamily: FONT_FAMILY,
      alignSelf:'flex-end'
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: 'bold',
    },
  });

export default styles;
