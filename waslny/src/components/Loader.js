import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';
import {AllAnimation} from '../constants/Animations';
import {colors} from '../styles/colors';

const Loader = props => {
  const isLoading = useSelector(state => state.loaderReducer.loading);

  return isLoading ? (
    <View style={styles.container}>
      <View style={{flex: 1, width: wp(90)}}>
        <Lottie source={AllAnimation.CAR_LOADER} autoPlay loop />
      </View>
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10000,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.678,
  },
  text: {
    color: 'white',
  },
});

export default Loader;
