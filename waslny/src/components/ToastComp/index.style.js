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
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.S,
      fontWeight: 'bold',
      marginBottom:wp(2)
    },
    containerStyle: {
      backgroundColor: 'white',
      padding: wp(2),
      marginHorizontal:wp(2),
      marginVertical:wp(10),
      borderRadius:wp(2)
    },
  });

export default styles;
