import { StyleSheet, Text, View } from 'react-native'

// global
import { Constants, Colors } from '../../global'

export const styles = StyleSheet.create({
    cardMainView: {
        marginHorizontal: 10,
        borderWidth: 0.8,
        borderColor: Colors.LITE_GRAY,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    // cardImageStyle: {
    //     height: Constants.height / 4,
    //     width: Constants.width * 0.8,
    //     borderTopLeftRadius: 8,
    //     borderTopRightRadius: 8,
    //     borderBottomLeftRadius: 8,
    //     borderBottomRightRadius: 8,
    //     overflow: 'hidden',
    //     resizeMode: 'cover'
    // },
    cardDesView: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    foodRatingView: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52, 52, 52,0.3)',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },
    average: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    numberOfReview: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    }
})