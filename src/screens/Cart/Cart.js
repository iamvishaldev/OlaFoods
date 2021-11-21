import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import FoodListCard from '../../Components/FoodListCard/FoodListCard';
import { cartData } from '../../global/cartData';

const Cart = () => {
    const removeItemFromCart = (item) => {
        // cartData.pop(item)
        const cartFilter = cartData.filter(currentItem => {
            if (item.id == currentItem.id) {
                return;
            }
        })
        return currentItem
    }
    return (
        <View style={{ padding: 5 }}>
            <View style={{ alignItems: 'center', backgroundColor: 'black', padding: 10, borderRadius: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>MY CART</Text>
            </View>
            <ScrollView>
                {
                    cartData.length > 0
                        ?
                        cartData.map((item, index) => (
                            <FoodListCard
                                key={index}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                                OnPress={() => removeItemFromCart(item)}
                                IsInCart={true}
                            />
                        ))
                        :
                        null
                }
            </ScrollView>
            <View style={{ height: '10%' }} />
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({})
