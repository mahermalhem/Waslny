import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import styles from './index.style';
import {Modal, IconButton, Text} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ModalComp = props => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const {
    children,
    title,
    visible,
    setVisible,
    textColor,
    icon,
    errorMsg,
    onPress,
  } = props;

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      useNativeDriver={true} 
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={style.containerStyle}>
      <IconButton
        icon="close"
        iconColor={theme.colors.TEXT}
        size={wp(6)}
        style={{alignSelf: 'flex-end'}}
        onPress={hideModal}
      />
      <Text style={style.title}>{title}</Text>
      {children}
    </Modal>
  );
};

export default ModalComp;
