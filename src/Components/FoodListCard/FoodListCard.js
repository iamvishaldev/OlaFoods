import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'

const FoodListCard = ({
    id,
    img,
    name,
    desc,
    price,
    OnPress = () => { },
    IsInCart
}) => {
    return (
        <View key={id}>
            <TouchableOpacity>
                <ScrollView>
                    <View style={styles.mainView}>
                        <Image source={{ uri: img }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                        <View style={{
                            marginLeft: 15,
                            width: '30%'
                        }}>
                            <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>{name}</Text>
                            <Text style={{ fontWeight: '300', color: 'grey', marginVertical: 8 }}>{desc}</Text>
                            <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>{price}</Text>
                        </View>
                        {
                            IsInCart
                                ?
                                <TouchableOpacity
                                    onPress={OnPress}
                                    style={styles.removeCartText}
                                >
                                    <Text style={{ color: '#fff' }}>Remove Cart</Text>
                                </TouchableOpacity>
                                :
                                <View>

                                    <TouchableOpacity
                                        onPress={OnPress}
                                        style={styles.addToCartText}
                                    >
                                        <Text style={{ color: '#fff' }}>ADD TO CART</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={styles.counterView}
                                    >
                                        <TouchableOpacity
                                            style={styles.counterMinus}
                                        ><Text style={{ fontSize: 25, color: '#ffff' }}>-</Text></TouchableOpacity>
                                        <View style={{ height: 20, width: 35, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 25, color: 'green' }}>1</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.counterPlus}
                                        ><Text style={{ fontSize: 25, color: '#ffff' }}>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                        }
                    </View>
                </ScrollView>
            </TouchableOpacity>
        </View>
    )
}

export default FoodListCard

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    removeCartText: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 10,
        height: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToCartText: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        height: 40,
        alignItems: 'center'
    },
    counterView: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 8
    },
    counterMinus: {
        backgroundColor: "black",
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    counterPlus: {
        backgroundColor: "black",
        height: 35, width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})
