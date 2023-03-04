import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = theme =>
  StyleSheet.create({
    textInput: {
      width: '85%',
      marginBottom: wp(3),
      alignSelf:'center'
    },
  });

export default styles;
