import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const size = {
  S: wp(3.5),
  M:wp(4),
  L: wp(5),
};

const letterSpacing = {
  S: 2,
  M: 4,
  L: 8,
};

export const typography = {size, letterSpacing};
