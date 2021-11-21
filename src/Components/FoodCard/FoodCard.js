import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

// components
import MyText from '../../Components/MyText/MyText'
import { MyIcons, Colors, Constants } from '../../global'

// styles
import { styles } from './FoodCardStyle'

const FoodCard = ({
    onPress = () => { },
    image,
    restaurantName,
    farAway,
    businessAddress,
    averageReview,
    numberOfReview,
    screenWidth,
    screenHeight
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                style={styles.cardMainView}
            >
                <Image
                    source={{ uri: image }}
                    style={{
                        height: screenHeight,
                        width: screenWidth,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        overflow: 'hidden',
                        resizeMode: 'cover'
                    }}
                />
                <MyText
                    text={restaurantName}
                    fontSize={18}
                    fontWeight='bold'
                    style={{ marginVertical: 5, paddingHorizontal: 10 }}
                />
                <View style={styles.cardDesView}>
                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                        <MyIcons.Ionicons name="location-sharp" size={25} color={Colors.BLACK} />
                        <MyText text={`${farAway}Min`} />
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', }}>
                        <MyText text={businessAddress} />
                    </View>
                </View>
            </View>
            <View style={styles.foodRatingView}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>

    )
}

export default FoodCard


