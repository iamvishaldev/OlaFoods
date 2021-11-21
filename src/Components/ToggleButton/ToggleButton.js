import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// global
import { Constants, Colors, MyIcons, Fonts } from '../../global'

const ToggleButton = ({
    onPress = () => { },
    text,
    delivery
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: delivery ? Colors.LITE_ORANGE : Colors.LITE_GRAY,
                borderRadius: 20
            }}
        >
            <Text style={{ paddingHorizontal: 20, padding: 10, fontFamily: Fonts.SEMI_BOLD, fontSize: 20 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ToggleButton

const styles = StyleSheet.create({})
