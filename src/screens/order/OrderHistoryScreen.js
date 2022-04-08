import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { styles } from "../../themes/commonStyles";

const OrderHistoryScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>

            <TabHeaderComponenet name="Order History"/>
            <Text style={{ marginBottom: 20 }}>{"You are at OrderHistoryScreen Page"}</Text>
            {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                
            }}>
                <Text>Go To Order Details</Text>
            </TouchableOpacity> */}
        </View>
    )
}
export default OrderHistoryScreen;
