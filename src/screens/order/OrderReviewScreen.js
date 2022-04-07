import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const OrderReviewScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at OrderReviewScreen Page"}</Text>


            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
               navigation.goBack()
            }}>
                <Text>{"Go Back"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("PaymentScreen")
            }}>
                <Text>{"PaymentScreen"}</Text>
            </TouchableOpacity>


        </View>
    )
}
export default OrderReviewScreen;

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