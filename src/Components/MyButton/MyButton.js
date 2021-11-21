import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../global'
import MyText from '../MyText/MyText'

const MyButton = ({
    Icon, Title,
    backgroundColor = Colors.LITE_ORANGE,
    style,
    width = '50%',
    color = Colors.WHITE,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                width: width,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                padding: 10,
                flexDirection: 'row',
                ...style
            }}
        >
            {Icon}
            <MyText
                text={Title}
                fontFamily="BOLD"
                color={color}

            />
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({})
