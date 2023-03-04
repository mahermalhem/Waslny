import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = theme =>
  StyleSheet.create({
    scroll: {flex: 1, width: '100%'},
    view: {justifyContent: 'center'},
  });

export default styles;
