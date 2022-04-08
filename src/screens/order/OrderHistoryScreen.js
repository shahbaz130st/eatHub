import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import OrderCardComponent from "../../component/OrderCardComponent";
import React from "react";
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { styles } from "../../themes/commonStyles";

const OrderHistoryScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>

            <TabHeaderComponenet name="Order History"/>
            <Text style={{ marginBottom: 20 }}>{"You are at OrderHistoryScreen Page1"}</Text>
            <OrderCardComponent
            cName=""
            cEmail
            contactNmae= ""
            deliveryAddress= ""
            orderNo= ""
            items= {[]}
            toalPrice = ""
            />
        </View>
    )
}
export default OrderHistoryScreen;
