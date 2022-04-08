import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "../themes/commonStyles";
import { useState } from "react";

const OrderCardComponent = (props) => {

    const [items, getitems] = useState(props.items)

  
    return(
        <View style= {styles.orderCard}>
        <Text> User Name :  {props.cName}</Text>
        <Text> User Email {props.cEmail}</Text>
        <Text> Delivery Address {props.deliveryAddress}</Text>
        <Text> Order No. {props.orderNo}</Text>
        <Text> Items : {props.cName}</Text>
        {
            items.map((item) => {

                return (

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 10, borderBottomWidth: 0.2, }}>
                    <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                        
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
            })

        }

        

    </View>
    );
}

export default OrderCardComponent;