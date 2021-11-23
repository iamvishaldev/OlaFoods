//import liraries
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

// global
import { ScreensName } from '../../global';

// navigation stack
import MainStack from '../MainStack/MainStack';

// screens
import Client from '../../screens/Client/Client';
import BussinessConsole from '../../screens/BussinessConsole/BussinessConsole';
import DriverConsole from '../../screens/DriverConsole/DriverConsole';
import Payment from '../../screens/Payment/Payment';
import Promotions from '../../screens/Promotions/Promotions';
import Settings from '../../screens/Settings/Settings';
import Help from '../../screens/Help/Help'
import CustomDrawer from './CustomDrawer';

const screenOptions = {
    headerShown: false
}
const options = {
    swipeEnabled: true,
};
const initialRouteName = ScreensName.MAIN_STACK


function Drawer() {

    // variables
    const Drawer = createDrawerNavigator();

    // function:render funtion
    const renderCustomDrawer = () => <CustomDrawer />

    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
            initialRouteName={initialRouteName}
            drawerContent={renderCustomDrawer}
        >
            <Drawer.Screen
                options={options}
                name={ScreensName.MAIN_STACK}
                component={MainStack}
            />
            <Drawer.Screen
                name={ScreensName.CLIENT}
                component={Client}
            />
            <Drawer.Screen
                name={ScreensName.BUSSINESSCONSOLE}
                component={BussinessConsole}
            />
            <Drawer.Screen
                name={ScreensName.DRIVERCONSOLE}
                component={DriverConsole}
            />
            <Drawer.Screen
                name={ScreensName.PAYMENT}
                component={Payment}
            />
            <Drawer.Screen
                name={ScreensName.PROMOTIONS}
                component={Promotions}
            />
            <Drawer.Screen
                name={ScreensName.SETTINGS}
                component={Settings}
            />
            <Drawer.Screen
                name={ScreensName.HELP}
                component={Help}
            />
        </Drawer.Navigator>
    )
}

export default Drawer
