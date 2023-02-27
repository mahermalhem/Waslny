import { StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = theme =>
    StyleSheet.create({
        textInput: {
            width:'85%'
        },
        text: {
            color: theme.colors.TEXT,
            fontSize: theme.typography.size.M,
            letterSpacing: theme.typography.letterSpacing.S,
            textAlign: 'justify',
        },
        leftIcon: {

        },
    });

export default styles;