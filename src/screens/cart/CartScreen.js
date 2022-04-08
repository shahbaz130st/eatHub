import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import BTNComponent from "../../component/BTNComponent";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { styles } from "../../themes/commonStyles";

const CartScreen = ({ navigation, route }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [discountAfterPrice, setDiscountAfterPrice] = useState(0)
    const getDate = async () => {
        try {
            const myArray = await AsyncStorage.getItem('cartArray');
            if (myArray !== null) {
                // We have data!!
                console.log("not null called", JSON.parse(myArray));
                let tempArray = JSON.parse(myArray)
                setcartData(tempArray)
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    const setcartData = (tempArray) => {
        for (let i = 0; i < tempArray.length; i++) {
            tempArray[i].ItemQuantityPrice = tempArray[i].Price * tempArray[i].quantity;
        }
        setCart(tempArray)
        let sum = 0, calculateDiscount = 0
        tempArray.forEach(x => {
            sum += x.ItemQuantityPrice;
        });
        console.log(sum)
        setTotal(sum)
        if (sum <= 80) {
            calculateDiscount = (sum * 5) / 100
            setDiscountAfterPrice(parseFloat(sum) - parseFloat(calculateDiscount))
        } else if (sum > 80 && sum <= 100) {
            calculateDiscount = (sum * 20) / 100
            setDiscountAfterPrice(parseFloat(sum) - parseFloat(calculateDiscount))
        } else {
            calculateDiscount = (sum * 30) / 100
            setDiscountAfterPrice(parseFloat(sum) - parseFloat(calculateDiscount))
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getDate()
        });
        return unsubscribe;
    }, [navigation])

    useEffect(() => {
        console.log("Executed every time the component receives new state or prop");
    });


    const makePayment = () => {

        navigation.navigate("PaymentScreen", { product: cart, total: total, afterDiscountPrice: discountAfterPrice })
    }
    const storeData = async (value) => {
        console.log(value)
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('cartArray', jsonValue)
            // getDate()
        } catch (e) {
            // saving error
        }
    }

    return (
        <View style={styles.mainViewStyle}>



            <TabHeaderComponenet name="Cart" />

            {
                cart.length > 0 ?
                    cart.map((item) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 20, borderBottomWidth: 0.5, }}>
                                <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                                    <MaterialCommunityIcons name="delete" color={`gray`} size={16} onPress={() => {
                                        let tempArray = cart
                                        for (let i = 0; i < tempArray.length; i++) {
                                            if (tempArray[i].Id == item.Id) {
                                                tempArray.splice(i, 1)
                                            }
                                        }
                                        setCart([...tempArray])
                                        storeData(tempArray)
                                        setcartData(tempArray)
                                    }} />
                                </View>
                                <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                                    <Text>{item.Title}</Text>
                                </View>
                                <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                                    <Text>{item.quantity}</Text>
                                </View>
                                <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                                    <Text>{`$`}{item.quantity * item.Price}</Text>
                                </View>
                            </View>
                        )
                    }) :
                    <Text>{"Cart is empty"}</Text>

            }
            {
                cart.length > 0 &&
                <View>
                    <View style={{ width: "100%", marginTop: 20, flexDirection: "row", justifyContent: "flex-end" }}>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{"Total Price"}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{total}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", marginTop: 20, flexDirection: "row", justifyContent: "flex-end" }}>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{"Dicount"}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{total <= 80 ? "5%" : (total > 80 && total <= 100) ? "20%" : "30%"}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", marginTop: 20, flexDirection: "row", justifyContent: "flex-end" }}>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{"Price After Dicount"}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Text>{discountAfterPrice}</Text>
                        </View>
                    </View>
                </View>
            }
            <BTNComponent
                name="Order"
                func={() => { makePayment() }}
            />
        </View>
    )
}
export default CartScreen;