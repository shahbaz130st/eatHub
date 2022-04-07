import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./CartScreen.style";

const CartScreen = ({ navigation, route }) => {
    const [cart, setCart] = useState([])
    const getDate = async () => {
        try {
            const myArray = await AsyncStorage.getItem('cartArray');
            if (myArray !== null) {
                // We have data!!
                console.log("not null called", JSON.parse(myArray));
                let tempArray = JSON.parse(myArray)
                console.log(tempArray)
                setCart(tempArray)
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getDate()
        });
        return unsubscribe;
    }, [navigation])
    return (
        <View style={styles.mainViewStyle}>
            <View style={{ height: 60, width: "100%", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>{"Cart"}</Text>
            </View>
            {
                cart.length > 0 ?
                    cart.map((item) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 30 }}>
                                <Text>{item.Title}</Text>
                                <Text>{item.quantity}</Text>
                                <Text>{item.quantity * item.Price}</Text>
                            </View>
                        )
                    }) :
                    <Text>{"Cart is empty"}</Text>
            }
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderReviewScreen")
            }}>
                <Text>{"OrderReviewScreen"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CartScreen;