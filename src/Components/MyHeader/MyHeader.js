// react components
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, withBadge } from 'react-native-elements'

// global
import { MyIcons, Colors, Constants, Fonts } from '../../global'
import MyText from '../MyText/MyText'

const MyHeader = ({
    Title,
    height = 50,
    isCart
}) => {

    const styles = StyleSheet.create({
        myHeaderView: {
            height: height,
            backgroundColor: Colors.LITE_ORANGE,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15
        }
    })

    // Icon Badge
    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.myHeaderView}>
            {/* <TouchableOpacity>
                <MyIcons.MaterialIcons name="restaurant-menu" size={25} />
            </TouchableOpacity>
            <MyText
                text={'Title'}
                fontSize={24}
                fontFamily={Fonts.SEMI_BOLD}
                textColor={Colors.BLACK}
                textAlign="center"
            />

            <View style={{ width: '10%' }} /> */}
            <TouchableOpacity>
                <MyIcons.FetherIcon name="menu" size={30} color={Colors.WHITE} />
            </TouchableOpacity>
            <MyText
                text={Title}
                fontSize={24}
                fontFamily={Fonts.SEMI_BOLD}
                textColor={Colors.BLACK}
                textAlign="center"
            />
            {
                isCart ?
                    <TouchableOpacity>
                        {/* <MyIcons.FetherIcon name="shopping-cart" size={30} color={Colors.WHITE} /> */}
                        <BadgeIcon
                            type="material-community"
                            color={Colors.WHITE}
                            name="cart"
                            size={34}
                        />
                    </TouchableOpacity>
                    :
                    <View style={{ width: '10%' }} />

            }
        </View>
    )
}

export default MyHeader


