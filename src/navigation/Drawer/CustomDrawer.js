// react components
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Switch } from 'react-native-elements';
// components
import DrawerItems from '../../Components/DrawerItem/DrawerItem'
import MyButton from '../../Components/MyButton/MyButton';
import MyText from '../../Components/MyText/MyText'
// global
import { Colors, MyIcons } from '../../global'

// styles
import { styles } from './CustomDrawerStyle'

const CustomDrawer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.profileView}>
                    <TouchableOpacity
                        style={styles.ImageView}
                    >
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" }}
                            style={styles.ImageStyle}
                        />
                    </TouchableOpacity>
                    <View style={styles.profileDetailView}>
                        <MyText
                            text={"Lalit Patel"}
                            fontFamily="BOLD"
                            fontSize={18}
                        />
                        <MyText
                            text={"Lalitpatel@gmail.com"}
                        />
                    </View>
                </View>
                <View style={styles.profileBottomView}>
                    <View style={styles.profileFavoritesView}>
                        <MyText
                            text={'1'}
                            fontFamily="BOLD"
                            fontSize={18}
                            color={Colors.THEME_COLOR}
                        />
                        <MyText
                            text={'My Favorites'}
                            fontSize={15}
                            color={Colors.BLUE}
                        />
                    </View>
                    <View style={styles.profileFavoritesView}>
                        <MyText
                            text={'0'}
                            fontFamily="BOLD"
                            fontSize={18}
                            color={Colors.THEME_COLOR}
                        />
                        <MyText
                            text={'My Carts'}
                            fontSize={15}
                            color={Colors.BLUE}
                        />
                    </View>
                </View>
                <DrawerItems
                    Title="Client"
                    Icon={<MyIcons.MaterialIcons name="connect-without-contact" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Business"
                    Icon={<MyIcons.Ionicons name="business" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Driver Console"
                    Icon={<MyIcons.MaterialIcons name="bike-scooter" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Payment"
                    Icon={<MyIcons.MaterialIcons name="payments" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Promotions"
                    Icon={<MyIcons.AntDesign name="tags" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Settings"
                    Icon={<MyIcons.AntDesign name="setting" size={22} />}
                    onPress={() => gotoSettings()}
                />
                <DrawerItems
                    Title="Help"
                    Icon={<MyIcons.MaterialIcons name="live-help" size={22} />}
                    onPress={() => gotoSettings()}
                />
                <View style={styles.PreferencesView}>
                    <MyText
                        text={"Preferences"}
                        fontFamily="BOLD"
                        fontSize={16}
                    />
                    <View
                        style={styles.DarkThemeView}
                    >
                        <MyText
                            text={"Dark Theme"}
                            fontFamily="BOLD"
                            fontSize={18}
                        />
                        <Switch value={false} color="orange" />
                    </View>
                </View>
                <View style={styles.logOutView}>
                    <MyButton
                        Icon={<MyIcons.MaterialIcons name="logout" size={20} />}
                        Title={"Sign Out"}
                        color={Colors.BLUE}
                        style={{ justifyContent: 'space-between', }}
                    />
                </View>
            </View>

        </View>
    )
}

export default CustomDrawer


