//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Image, ScrollView } from 'react-native';

// components
import MyButton from '../../Components/MyButton/MyButton';
import MyHeader from '../../Components/MyHeader/MyHeader';
import MyText from '../../Components/MyText/MyText';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import FoodCard from '../../Components/FoodCard/FoodCard';

// count down timer
import Countdown from 'react-native-countdown-component';

// style
import { styles } from '../HomeScreen/HomeScreenStyle'

// global
import { Constants, Colors, MyIcons, Fonts, ScreensName } from '../../global'
import FoodHeader from '../../Components/FoodHeader/FoodHeader';
import { width, height } from '../../global/Constants'

// DATA
import { filterData, restaurantsData } from '../../global/Data'
import { NavigationContainer } from '@react-navigation/native';

// create a component
const HomeScreen = ({ navigation }) => {

    const [delivery, setDelivery] = useState(true)

    const [indexCheck, setIndexCheck] = useState('0')

    //function : render function 
    const renderCategories = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => setIndexCheck(item.id)}
            >
                <View
                    style={indexCheck == item.id ? { ...styles.largeCardSelected } : { ...styles.smallCardSelected }}>
                    <Image
                        source={item.image}
                        style={{ width: 80, height: 70, borderRadius: 60 / 2 }}
                    />
                    <MyText
                        text={item.name}
                        textAlign="center"
                        fontWeight="bold"
                        style={{
                            paddingVertical: 6,
                            color: indexCheck == item.id ? Colors.WHITE : Colors.BLUE
                        }}
                        color={Colors.BLUE}
                    />
                </View>
            </Pressable>
        )
    }

    //function : render function 
    const renderFreeDeliveryFoods = ({ item, index }) => {
        return (
            <>
                <FoodCard
                    image={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                    screenWidth={Constants.width * 0.8}
                    screenHeight={Constants.height / 4}
                />
            </>
        )
    }

    //function : go to RestaurantMapScreen 
    const RestaurantMapScreen = () => navigation.navigate(ScreensName.RESTAURANTSMAPSCREEN)


    return (
        <View style={styles.container}>
            <MyHeader
                Title={'OlaFoods'}
                isCart={true}
            />
            <View style={styles.ToggleButtonView}>
                <ToggleButton
                    text={'Delivery'}
                    delivery={delivery}
                    onPress={() => setDelivery(!delivery)}
                />
                <ToggleButton
                    text={'Pick-Up'}
                    delivery={delivery}
                    onPress={() => setDelivery(!delivery),
                        RestaurantMapScreen
                    }
                />
            </View>
            <ScrollView>
                <View style={styles.filterMainView}>
                    <View
                        style={styles.filterView}
                    >
                        <View
                            style={styles.locationViewIcon}
                        >
                            <MyIcons.Ionicons name="location-sharp" size={25} color={Colors.BLACK} />
                            <MyText
                                text={'22 Bhiwandi'}
                            />
                        </View>
                        <View
                            style={styles.clockViewIcon}
                        >
                            <MyIcons.AntDesign
                                name="clockcircle"
                                size={25} color={Colors.BLACK}
                                style={{ marginRight: 10 }}
                            />
                            <MyText
                                text={'Now'}
                            />
                        </View>

                    </View>
                    <TouchableOpacity>
                        <MyIcons.MaterialIcons name='tune' size={25} color={Colors.BLACK} />
                    </TouchableOpacity>

                </View>
                <FoodHeader text={'Categories'} />
                <View >
                    <FlatList
                        data={filterData}
                        renderItem={renderCategories}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />
                </View>
                <FoodHeader text={'Free delivery now'} />

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    padding: 10
                }}>
                    <MyText
                        text={'Options changing in'}
                        fontWeight='bold'
                        fontSize={18}
                        color={Colors.BLUE}
                        style={{ paddingHorizontal: 10 }}
                    />
                    <Countdown
                        until={3600}
                        size={15}
                        digitStyle={{ backgroundColor: 'green' }}
                        digitTxtStyle={{ color: Colors.LITE_GRAY }}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: 'Min', s: 'Sec' }}
                    />

                </View>
                <FlatList
                    data={restaurantsData}
                    renderItem={renderFreeDeliveryFoods}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />


                <FoodHeader text={'Promotions available'} />
                <FlatList
                    data={restaurantsData}
                    renderItem={renderFreeDeliveryFoods}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <FoodHeader text={'Restaurants in your Area'} />
                <View style={{ width: Constants.width }}>
                    {
                        restaurantsData.length > 0
                        &&
                        restaurantsData.map(
                            item => {
                                return (
                                    <View
                                        style={{ marginVertical: 8 }}
                                        key={item.id}
                                    >
                                        <FoodCard
                                            image={item.images}
                                            restaurantName={item.restaurantName}
                                            farAway={item.farAway}
                                            businessAddress={item.businessAddress}
                                            averageReview={item.averageReview}
                                            numberOfReview={item.numberOfReview}
                                            screenWidth={width * 0.95}
                                            screenHeight={height / 4}
                                        />
                                    </View>
                                )
                            }

                        )
                    }
                </View>
            </ScrollView>
            <View>{
                delivery ?
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreensName.RESTAURANTSMAPSCREEN)}
                        style={styles.floatingButton}
                    >
                        <MyIcons.MaterialCommunityIcons name="map-marker" size={32} color={Colors.ORANGE} />
                        <MyText
                            text={"Map"}
                            color={Colors.TEXT_GRAY}
                            fontWeight={'bold'}
                        />
                    </TouchableOpacity>
                    :
                    null
            }

            </View>
        </View>

    );
};


//make this component available to the app
export default HomeScreen;
