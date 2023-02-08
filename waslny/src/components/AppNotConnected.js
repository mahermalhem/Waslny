import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import { FONT_FAMILY } from '../constants/FONT';
import { strings } from '../locales/I18n';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppNotConnected = (props) => {
    
    return (
        <Modal isVisible={true} >
            <View style={{ backgroundColor:'white',borderRadius:30,height:wp(50),justifyContent:'center',alignItems:'center'}}>
                <Icon name="warning" size={wp(20)} color='red' />
                <Text style={{fontFamily:FONT_FAMILY,color:COLOR.RED}}>{strings('common.noInternetConnection')}</Text>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: { flexDirection: 'row',marginTop:wp(25)},
});

export default AppNotConnected;
