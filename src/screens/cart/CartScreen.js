import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./CartScreen.style";

const CartScreen = ({ navigation, route }) => {
    const [cart, setCart] = useState({
        ProductId: "",
        Quantity: 0,
        UserId: 7
    })
    useEffect(() => { }, [])
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at Cart Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderReviewScreen")
            }}>
                <Text>{"OrderReviewScreen"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartScreen;