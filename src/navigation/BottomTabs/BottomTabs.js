import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// global
import { Colors, MyIcons, ScreensName } from '../../global'

// styles
import { styles } from '../BottomTabs/BottomTabsStyle'
// screens
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import Search from '../../screens/Search/Search'
import Order from '../../screens/Order/Order'
import Profile from '../../screens/Profile/Profile'

export default function BottomTabs() {
    // variables
    const Tab = createBottomTabNavigator()
    const screenOptions = {
        showLabel: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabStyleView,
    }
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
        >
            <Tab.Screen
                name={ScreensName.HOMESCREEN}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MyIcons.AntDesign
                                    name="home"
                                    size={24}
                                    color={focused ? Colors.LITE_ORANGE : Colors.BLACK}
                                />
                            </View>
                        )

                    }
                }}
            />
            <Tab.Screen
                name={ScreensName.SEARCH}
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MyIcons.FetherIcon
                                    name="search"
                                    size={24}
                                    color={focused ? Colors.LITE_ORANGE : Colors.BLACK}
                                />
                            </View>
                        )

                    }
                }}
            />
            <Tab.Screen
                name={ScreensName.ORDERS}
                component={Order}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View >
                                <MyIcons.Octicons
                                    name="list-unordered"
                                    size={24}
                                    color={focused ? Colors.LITE_ORANGE : Colors.BLACK}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={ScreensName.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MyIcons.MaterialCommunityIcons
                                    name="account"
                                    size={24}
                                    color={focused ? Colors.LITE_ORANGE : Colors.BLACK}
                                />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}


