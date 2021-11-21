import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../../global'

const MyText = ({
    text, style,
    fontSize, fontFamily = Fonts.SEMI_BOLD,
    fontWeight,
    textAlign, color,
    onPress = () => { }
}) => {
    const styles = StyleSheet.create({
        textStyle: {
            fontSize: fontSize,
            fontFamily: fontFamily,
            textAlign: textAlign,
            color: color,
            fontWeight: fontWeight,
            ...style
        }
    })
    return (
        <Text onPress={onPress} style={styles.textStyle}>{text}</Text>
    )
}

export default MyText


