import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../../Components/MyButton/MyButton'
import MyText from '../../Components/MyText/MyText'
import MyTextInput from '../../Components/MyTextInput/MyTextInput'
import { Fonts, MyIcons, ScreensName } from '../../global'

const ForgotPassword = ({ navigation }) => {

    const goToSignIn = () => {
        navigation.navigate(ScreensName.SIGN_IN)
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <MyText
                    text={"Forget Password"}
                    fontFamily={Fonts.SEMI_BOLD}
                    fontSize={30}
                    textAlign="center"
                />
                <MyTextInput
                    Title="New Password"
                    placeholder="Enter password"
                    InputIcons1={<MyIcons.FetherIcon name="lock" size={22} />}
                />
                <MyTextInput
                    Title="Confirm Password"
                    placeholder="Enter confirm password"
                    InputIcons1={<MyIcons.FetherIcon name="lock" size={22} />}
                />
                <View style={{ height: 30 }} />
                <MyButton
                    Title="Submit"
                    onPress={() => goToSignIn()}
                />
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        flex: 1,
        padding: 20,
        justifyContent: "center"
    }
})
