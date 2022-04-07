import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
const OrderHistoryScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at OrderHistoryScreen Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                
            }}>
                <Text>Go To Order Details</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OrderHistoryScreen;

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