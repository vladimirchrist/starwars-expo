import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default StyleSheet.create({
    title: {
        fontSize: 14,
        color: Colors.WHITE,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: Colors.DARK,
    },
    parentHr: {
        height: 1,
        color: '#FFF',
        width: '100%'
    },
    child: {
        backgroundColor: "#FFF",
        padding: 16,
    },
    charAttributes: {
        display: "flex",
        flexDirection: "row"
    },

    propertie: {
        fontWeight: "700"
    },
    value: {
        paddingLeft: 10
    }
})
