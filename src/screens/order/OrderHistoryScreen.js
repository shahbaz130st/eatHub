import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import OrderCardComponent from "../../component/OrderCardComponent";
import React, { useEffect,useState } from "react";
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { styles } from "../../themes/commonStyles";
import { auth, fireDB } from '../../../firebase'

const OrderHistoryScreen = ({ navigation, route }) => {
    const [order,setOrder]=useState({})
    useEffect(() => {
        getUserOrderInfo()
    }, [])
    async function getUserOrderInfo() {
        const snapshot = await fireDB.collection('order').get();
        const listofOrder = snapshot.docs.map(doc => doc.data());
        console.log(listofOrder)
        for (let i = 0; i < listofOrder.length; i++) {
            if (listofOrder[i].userId == auth.currentUser.uid) {
                setOrder(listofOrder[i])
            }
        }
    }
    return (
        <View style={styles.mainViewStyle}>

            <TabHeaderComponenet name="Order History" />
            <Text style={{ marginBottom: 20 }}>{"You are at OrderHistoryScreen Page1"}</Text>
            <OrderCardComponent
                cName={order?.userName}
                cEmail={auth.currentUser.email}
                contactNmae={order.contactName}
                deliveryAddress={order.deliveryAddress}
                orderNo={order.orderNo}
                items={order.productArray}
                toalPrice={order.Discount}
            />
        </View>
    )
}
export default OrderHistoryScreen;
