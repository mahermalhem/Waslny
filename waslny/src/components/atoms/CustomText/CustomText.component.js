import React from 'react';
import {Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './CustomText.style';
import {TextStyle} from '_utils/typography';

const CustomText = props => {
  const {text, overrideStyle, textFontStyle, fontScaling} = props;

  return (
    <Text
      {...props}
      style={[TextStyle[textFontStyle], overrideStyle]}
      allowFontScaling={fontScaling}>
      {text}
    </Text>
  );
};

CustomText.propTypes = {
  text: PropTypes.string,
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textFontStyle: PropTypes.string,
  fontScaling: PropTypes.bool,
};

CustomText.defaultProps = {
  text: '',
  overrideStyle: {},
  textFontStyle: 'largeTitle',
  fontScaling: false,
};

export default CustomText;
