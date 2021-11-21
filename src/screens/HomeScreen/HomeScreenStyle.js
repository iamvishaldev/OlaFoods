//import liraries
import { StyleSheet } from 'react-native';

// global
import { Constants, Colors, MyIcons, Fonts } from '../../global'

// define your styles
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ToggleButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 15
    },
    filterMainView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    filterView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: Colors.LITE_GRAY,
        paddingVertical: 6,
        borderRadius: 18,
        paddingHorizontal: 20
    },
    locationViewIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    clockViewIcon: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 15,
        padding: 5
    },
    smallCardSelected: {
        height: 120,
        width: 100,
        backgroundColor: Colors.LITE_GRAY,
        padding: 5,
        borderRadius: 120 / 3.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    largeCardSelected: {
        height: 150,
        width: 120,
        padding: 5,
        borderRadius: 120 / 3.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: Colors.LITE_ORANGE,
    },
    floatingButton: {
        position: 'absolute',
        backgroundColor: Colors.LITE_ORANGE,
        width: 63,
        height: 63,
        borderRadius: 63 / 2,
        bottom: 10,
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.LITE_GRAY,
        padding: 10
    }
});