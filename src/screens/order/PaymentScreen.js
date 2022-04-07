import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const PaymentScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at PaymentScreen Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.goBack()
            }}>
                <Text>{"Go Back"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("ConfirmationScreen")
            }}>
                <Text>{"ConfirmationScreen"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PaymentScreen;

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    buttonStyle: {
        borderColor: "#FF4500",
        borderWidth: 1,
        padding: 15,
        borderRadius: 5
    }
})