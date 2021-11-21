// react components
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native'
// styles
import { THEME_COLOR } from '../../global/Colors'
// import { styles } from '../SignIn/SignInStyle'

// components
import MyText from '../../Components/MyText/MyText'
import { Colors, Fonts, MyIcons, ScreensName } from '../../global'
import MyTextInput from '../../Components/MyTextInput/MyTextInput'
import MyButton from '../../Components/MyButton/MyButton'

// Animation
import * as Animatable from 'react-native-animatable'
import OTPSend from '../../modals/OTPSend/OTPSend'
import ValidateOTP from '../../modals/ValidateOTP/ValidateOTP'

const SignIn = ({ navigation }) => {

    const [textInputEmail, setTextInputEmail] = useState("")

    const [textInputPassword, setTextInputPassword] = useState("")

    const [textInput2Focused, setTextInput2Focused] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)

    const [showValidateOTP, setShowValidateOTP] = useState(false)

    // Function:Navigation
    const goToCreateAccountScreen = () => {
        navigation.navigate(ScreensName.SIGNINWELCOME)
    }

    const goToHomeScreen = () => {
        navigation.navigate(ScreensName.BOTTOM_TABS)
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <MyText
                    text={"Sign In"}
                    fontSize={40}
                    fontFamily={Fonts.REGULAR}
                    textAlign="center"
                />

                <MyTextInput
                    Title={"Email"}
                    placeholder={"Enter Your Email"}
                    InputIcons1={<MyIcons.FetherIcon name="user" size={25} />}
                    elevation={1.5}
                />
                <MyTextInput
                    Title={"Password"}
                    placeholder={"Enter Your Password"}
                    InputIcons1={<MyIcons.FetherIcon name="lock" size={25} />}
                    InputIcons2={<MyIcons.FetherIcon name="eye" size={25} />}
                    elevation={1.5}
                />
                <MyButton
                    Title={"Sign In"}
                    style={{ marginVertical: 20 }}
                    fontFamily={Fonts.SEMI_BOLD}
                    onPress={() => goToHomeScreen()}
                />
                <MyText
                    text={"Forget Password ?"}
                    textAlign="center"
                    fontSize={15}
                    fontFamily={Fonts.SEMI_BOLD}
                    style={{ marginVertical: 5 }}
                    onPress={() => setModalVisible(true)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                    <MyText
                        text={"---------------------------------------------"}
                    />
                    <MyText
                        text={"OR"}
                        color={Colors.LITE_ORANGE}
                        style={{ paddingHorizontal: 5, }}
                        fontSize={21}
                    />
                    <MyText
                        text={"---------------------------------------------"}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                    <MyButton
                        Title={"Sign In With Facebook"}
                        backgroundColor={Colors.BLUE}
                        Icon={<MyIcons.FontAwesome name="facebook-f" size={20} color={Colors.WHITE} />}
                        style={{ marginRight: 5 }}
                    />
                    <MyButton
                        Title={"Sign In With Google"}
                        backgroundColor={Colors.RED}
                        Icon={<MyIcons.AntDesign name="google" size={20} color={Colors.WHITE} />}
                        style={{ marginRight: 5 }}
                    />
                </View>
                <View style={{ height: "5%" }} />
                <MyText
                    text={"New on XpressFood ?"}
                    fontSize={18}
                />
                <View style={{ height: 5 }} />
                <View style={{ alignSelf: 'flex-end' }}>
                    <MyButton
                        Title={"Create Account"}
                        width={'35%'}
                        color={Colors.LITE_ORANGE}
                        backgroundColor={Colors.WHITE}
                        style={{ borderColor: Colors.LITE_ORANGE, borderWidth: 1 }}
                        onPress={() => goToCreateAccountScreen()}
                    />
                </View>
            </View>
            {/* modal */}
            <OTPSend
                visible={modalVisible}
                setVisibility={setModalVisible}
                setShowValidateOTP={setShowValidateOTP}
            />
            <ValidateOTP
                visible={showValidateOTP}
                setVisibility={setShowValidateOTP}
            />
        </View>
    )
}

export default SignIn


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME_COLOR
    },
    mainView: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    },
})
