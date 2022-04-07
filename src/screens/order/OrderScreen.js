import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




const OrderScreen = ({ navigation, route }) => {
    let initialOrder = {
        orderNo: 123,
        userId: 21,
        productIDS: 1,
        Tax: 1,
        Discount: 0.1,
        Subtotal: 1234,
        deliveryAddress: "",
        orderTime: "20:00",
        Total: 12345,
    }
    const [order, setOrder] = useState(initialOrder)
    useEffect(() => {
        console.log("called")
    }, [])
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at order Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("PaymentScreen")
            }}>
                <Text>{"Payments"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderReviewScreen")
            }}>
                <Text>{"Order Review"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("ConfirmationScreen")
            }}>
                <Text>{"Confirmation"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderHistoryScreen")
            }}>
                <Text>{"Order History"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default OrderScreen;

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
        borderRadius: 5,
        marginBottom: 20
    }
})