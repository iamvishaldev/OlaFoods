import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../global'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:Colors.LITE_ORANGE
    },
    mainView: {
        padding: 10
    },
    profileView: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: 'center',
        marginBottom: 20,
        // backgroundColor: Colors.LITE_ORANGE,
        padding: 10,
        borderRadius: 20,
    },
    ImageView: {
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: Colors.LITE_ORANGE,
        borderRadius: 100,
    },
    ImageStyle: {
        height: "100%",
        width: "100%",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.LITE_ORANGE
    },
    profileDetailView: {
        marginLeft: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profileBottomView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.LITE_ORANGE,
        padding: 10,
        borderRadius: 10 / 2,
        marginBottom: 20
    },
    profileFavoritesView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    PreferencesView: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: Colors.LITE_GRAY,
        marginVertical: 20
    },
    DarkThemeView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    logOutView: {
        flexDirection: "row",
        alignItems: "center"
    }
})