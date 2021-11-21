import React from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import MyButton from '../../Components/MyButton/MyButton'
import MyText from '../../Components/MyText/MyText'
import MyTextInput from '../../Components/MyTextInput/MyTextInput'
import { Colors, ScreensName } from '../../global'
import { styles } from '../ValidateOTP/ValidateOTPStyle'

import { useNavigation } from '@react-navigation/native';

const ValidateOTP = ({
    visible, setVisibility,
}) => {

    const navigation = useNavigation();

    const closeModal = () => {
        setVisibility(false)
    }

    const gotoForgetPassword = () => {
        closeModal()
        navigation.navigate(ScreensName.FORGOT_PASSSWORD)
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.blurView} onPress={closeModal} />
                <View style={styles.modalMainView}>
                    <MyText
                        text={"Verification Code"}
                        textAlign={"center"}
                    />
                    <MyText
                        text={"Please enter verification code recieved in your registreded contact number."}
                        textAlign={"center"}
                        style={{ marginVertical: 2 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MyTextInput
                            isBorder={true}
                            style={styles.textInputOTPStyle}
                        />
                        <MyTextInput
                            isBorder={true}
                            style={{ height: 50, width: 50, margin: 5 }}
                        />
                        <MyTextInput
                            isBorder={true}
                            style={{ height: 50, width: 50, margin: 5 }}
                        />
                        <MyTextInput
                            isBorder={true}
                            style={{ height: 50, width: 50, margin: 5 }}
                        />
                    </View>
                    <MyButton
                        onPress={() => gotoForgetPassword()}
                        Title={'Reset Password'}
                        backgroundColor={Colors.LITE_ORANGE}
                        style={{ marginVertical: 35 }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ValidateOTP


