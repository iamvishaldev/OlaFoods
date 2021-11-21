// react component
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// global
import { ScreensName } from '../../global'
import SignIn from '../../screens/SignIn/SignIn'
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword'
import SignInWelcome from '../../screens/SignInWelcome/SignInWelcome'
import SignUp from '../../screens/SignUp/SignUp'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import Search from '../../screens/Search/Search'
import Order from '../../screens/Order/Order'
import Profile from '../../screens/Profile/Profile'
import BottomTabs from '../BottomTabs/BottomTabs'
import RestaurantsMapScreen from '../../screens/RestaurantsMapScreen/RestaurantsMapScreen'

const MainStack = () => {
    const Stack = createNativeStackNavigator()

    const screenOptions = {
        headerShown: false
    }

    // stack
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={ScreensName.SIGN_IN} component={SignIn} />
            <Stack.Screen name={ScreensName.FORGOT_PASSSWORD} component={ForgotPassword} />
            <Stack.Screen name={ScreensName.SIGNINWELCOME} component={SignInWelcome} />
            <Stack.Screen name={ScreensName.SIGN_UP} component={SignUp} />
            <Stack.Screen name={ScreensName.BOTTOM_TABS} component={BottomTabs} />
            <Stack.Screen name={ScreensName.RESTAURANTSMAPSCREEN} component={RestaurantsMapScreen} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
