// react components
import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import MyButton from '../../Components/MyButton/MyButton'
import MyText from '../../Components/MyText/MyText'
import MyTextInput from '../../Components/MyTextInput/MyTextInput'

// styles
import { styles } from '../../modals/OTPSend/OTPSendStyle'
import { MyIcons, Colors } from '../../global'


const OTPSend = ({
    visible, setVisibility,
    setShowValidateOTP
}) => {

    // Function:close modal function
    const closeModal = () => {
        setVisibility(false)
    }

    const sendOTP = () => {
        closeModal()
        setShowValidateOTP(true)
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
                        text="Enter your registred phone number"
                        fontFamily="BOLD"
                        fontSize={20}
                        textAlign="center"
                    />
                    <MyTextInput
                        Title="Contact number"
                        placeholder="Enter contact number"
                        isBorder={true}
                        InputIcons1={<MyIcons.FetherIcon name="smartphone" size={24} />}
                    />
                    <MyButton
                        Title="Submit"
                        backgroundColor={Colors.LITE_ORANGE}
                        style={{ marginVertical: 20 }}
                        onPress={() => sendOTP()}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default OTPSend

