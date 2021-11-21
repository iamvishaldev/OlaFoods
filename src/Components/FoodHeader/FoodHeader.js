import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// global
import { Constants, Colors, MyIcons, Fonts } from '../../global'

const FoodHeader = ({
    text
}) => {
    return (
        <View style={{ padding: 15 }}>
            <TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FoodHeader

const styles = StyleSheet.create({})
