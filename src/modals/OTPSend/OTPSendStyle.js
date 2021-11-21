import { StyleSheet } from 'react-native'
import { Colors } from '../../global'


export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.BLACK + '77',
    },
    blurView: {
        flex: 1,
    },
    modalMainView: {
        backgroundColor: Colors.WHITE,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20
    }
})
