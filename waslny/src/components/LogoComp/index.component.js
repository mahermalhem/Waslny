import * as React from 'react';
import { Alert, TouchableOpacity,View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '../../styles/colors';
import { FONT_FAMILY } from '../../constants/FONT';
import { AllAnimation } from '../../constants/Animations';
import Lottie from 'lottie-react-native';

const LogoComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const { label, textColor, Icon, errorMsg, onPress } = props;

  return (
   <View style={{flex:0.8,width:'100%',height:'100%'}}>
      <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Text style={style.title}>Waslny</Text>
        <Text style={style.title}>وصلني محافظات</Text>

      </View>
      <View style={{flex:0.5,}}>
        <Lottie source={AllAnimation.MAN_WAITING_CAR} autoPlay={true} loop={false}/>
      </View>
   </View>
  );
};

export default LogoComp;
