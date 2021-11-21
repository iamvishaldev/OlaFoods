import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Fonts, MyIcons } from '../../global'
import MyText from '../MyText/MyText'

// Animation
import * as Animatable from 'react-native-animatable'

const MyTextInput = ({
    Title,
    placeholder,
    InputIcons1,
    InputIcons2,
    isBorder = false,
    elevation = 0.5,
    style,
    onPress = () => { }
}) => {
    const styles = StyleSheet.create({
        mainView: {
            marginVertical: 8,
            ...style
        }
    })

    return (
        <View style={styles.mainView}>
            <MyText
                text={Title}
                fontFamily={Fonts.SEMI_BOLD}
                style={{ marginVertical: 5 }}
            />
            <Animatable.View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 10,
                borderWidth: isBorder ? 0.5 : 0,
                borderRadius: 10,
                elevation: elevation
            }}>
                {InputIcons1}
                <TextInput placeholder={placeholder} style={{ paddingLeft: 10, width: '85%', fontFamily: Fonts.SEMI_BOLD }} />
                {InputIcons2}
            </Animatable.View>
        </View>
    )
}

export default MyTextInput

