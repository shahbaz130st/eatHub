import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
const CartScreen = ({navigation, route}) => {
    return (
        <View style={styles.mainViewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderScreen")
            }}>
                <Text>{"Order Screenn"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartScreen;

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