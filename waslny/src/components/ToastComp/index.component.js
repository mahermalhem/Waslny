import * as React from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';

const ToastComp = props => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{zIndex: 10000}}>
      <Toast />
    </View>
  );
};

export default ToastComp;
