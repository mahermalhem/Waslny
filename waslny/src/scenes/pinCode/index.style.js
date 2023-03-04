import {StyleSheet} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

const styles = theme =>
StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: theme.colors.PRIMARY,
    fontSize: theme.typography.size.L,
    letterSpacing: theme.typography.letterSpacing.M,
    fontWeight: 'bold',
  },
  text: {
    color: theme.colors.TEXT,
    fontSize: theme.typography.size.L,
    letterSpacing: theme.typography.letterSpacing.S,
    textAlign: 'justify',
  },
  referralCode: {
    color: theme.colors.TEXT_SECONDARY,
    fontSize: theme.typography.size.M,
    letterSpacing: theme.typography.letterSpacing.L,
    fontWeight: 'bold',
  },
  otpInputCont: {
    height: wp(12),
    width: wp(12),
    borderWidth: 1,
    borderColor: theme.colors.TEXT,
    borderRadius: 10,
    marginHorizontal: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:theme.colors.TEXT_SECONDARY,
  },
  verBtnContainer:{width:'100%',height:'50%'}
});

export default styles ;