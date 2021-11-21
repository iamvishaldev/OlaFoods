import React, { useState, Fragment } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import FoodListCard from '../../Components/FoodListCard/FoodListCard'
import { cartData } from '../../global/cartData'

const FoodListing = ({ navigation }) => {

    const myArray = [
        {
            id: 1,
            desc: 'Lorem ipsum dolor sit amet.',
            name: 'Biriyani Center',
            img: 'https://media.istockphoto.com/photos/briyani-rice-with-chicken-and-some-veggie-picture-id1303098890?b=1&k=20&m=1303098890&s=170667a&w=0&h=KP1QYMIS6eUnRI4aSGP-Hj7qn6TZX4WtqGf7JttQ8pQ=',
            price: '200rs'
        },
        {
            id: 2,
            desc: 'Lorem ipsum dolor sit amet consectetur.',
            name: 'Pizza Khayo',
            img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            price: '300rs'
        },
        {
            id: 3,
            desc: 'Lorem ipsum dolor sit.',
            name: 'Baba Restaurant',
            img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            price: '100rs'
        },
        {
            id: 4,
            desc: 'Lorem ipsum dolor sit amet.',
            name: 'Coffe4u',
            img: 'https://images.unsplash.com/photo-1523942839745-7848c839b661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            price: '200rs'
        },
        {
            id: 5,
            desc: 'Lorem ipsum dolor sit.',
            name: 'BurgerKing',
            img: 'https://images.unsplash.com/photo-1528669826296-dbd6f641707d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vya2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            price: '200rs'
        },
        {
            id: 6,
            desc: 'Lorem ipsum dolor sit.',
            name: 'Baba Ka Dhaba',
            img: 'https://media.istockphoto.com/photos/three-indian-friends-having-their-breakfast-tandoori-paranthas-picture-id117955775?b=1&k=20&m=117955775&s=170667a&w=0&h=P3jSOF0Lw70TsgG6MHhxX81Cuw-finb2geDop4YTc-w=',
            price: '90rs'
        },
        {
            id: 7,
            desc: 'Lorem ipsum dolor sit.',
            name: 'Baba Ka Hotel',
            img: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            price: '5000rs'
        },
    ]

    //Function:navigation item add to cart
    const gotoCart = () => {
        navigation?.navigate("Cart");
    }

    return (
        <Fragment>
            <View
                style={{ padding: 15 }}
            >
                <View style={{
                    alignItems: 'center',
                    backgroundColor: 'black',
                    padding: 10,
                    borderRadius: 5
                }}>
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>MY RESTAURENTS</Text>
                </View>
                <ScrollView >
                    {
                        myArray.map((item, index) => {
                            return (
                                <FoodListCard
                                    key={index}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    desc={item.desc}
                                    price={item.price}
                                    OnPress={() => { cartData.push(item), gotoCart() }}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </Fragment>
    )
}

export default FoodListing

const styles = StyleSheet.create({})
