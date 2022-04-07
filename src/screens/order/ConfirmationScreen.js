import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ConfirmationScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at ConfirmationScreen Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderHistoryScreen")
            }}>
                <Text>{"OrderHistoryScreen"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ConfirmationScreen;

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