// react components
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Modal, TouchableOpacity, Image } from 'react-native'
// styles
import { THEME_COLOR } from '../../global/Colors'

import {ScreensName } from '../../global'
// import { styles } from '../SignIn/SignInStyle'

// components
import MyText from '../../Components/MyText/MyText'
import { Colors, Fonts, MyIcons } from '../../global'
import MyTextInput from '../../Components/MyTextInput/MyTextInput'
import MyButton from '../../Components/MyButton/MyButton'

// Animation
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper'


const SignInWelcome = ({navigation}) => {
    // Function: navigation function
    const goToSignInScreen = ()=>{navigation.navigate(ScreensName.SIGN_IN)}
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <MyText
                    text={"DISCOVER RESTAURANTS IN YOUR AREA"}
                    textAlign="center"
                    fontSize={30}
                    style={{ color: Colors.LITE_ORANGE, fontFamily: Fonts.SEMI_BOLD }}
                />
                <View style={{ flex: 4, justifyContent: 'center', }}>
                    <Swiper autoplay={true}>
                        <View style={styles.slide1}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                                style={{ width: '100%', height: '70%' }}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                                style={{ width: '100%', height: '70%' }}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                                style={{ width: '100%', height: '70%' }}
                            />
                        </View>
                    </Swiper>
                </View>
                <MyButton 
                Title={'SignIn'}
                onPress={()=>goToSignInScreen()}
                style={{marginVertical:8}}
                />
                <MyButton 
                Title={'Create Account'}
                backgroundColor={Colors.WHITE}
                color={Colors.LITE_ORANGE}
                style={{borderWidth:1,borderColor:Colors.LITE_ORANGE}}
                onPress={()=>goToSignInScreen()}
                />
            </View>
        </View>
    )
}

export default SignInWelcome

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        flex: 1,
        padding: 20
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
})
