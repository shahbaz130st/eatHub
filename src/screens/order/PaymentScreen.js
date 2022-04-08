import { Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import BTNComponent from "../../component/BTNComponent";
import DatePicker from 'react-native-datepicker'
import React from "react";
import { styles } from "../../themes/commonStyles";

const PaymentScreen = ({ navigation, route }) => {

    const [contactName, setContactName] = useState('')
    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [expiryDate, setExpiryDate] = useState();
    const [todaydate, setDate] = useState();
    const [cardNo, setCardNo] = useState();

    useEffect(() => {
        let today = new Date();
        let date =today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        setDate(date);
      }, []);


      const orderValidation = () => {
        if (contactName === "") {
          alert("Contact Name is required")
        }
     
        else if (deliveryAddress == "") {
          alert("Delivey Address is required")
        }
        else if (cardNo.length <= 15) {
          alert("Card No. Must be 16 ")
        }
       
        else {
            placeOrder();
        }
      }


      const placeOrder = () => {

        navigation.navigate("OrderHistoryScreen")

      }

    return (
        <View style={styles.mainViewStyle}>
            {/* <Text style={{ marginBottom: 20 }}>{"You are at PaymentScreen Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.goBack()
            }}>
                <Text>{"Go Back"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("OrderHistoryScreen")
            }}>
                <Text>{"OrderHistoryScreen"}</Text>
            </TouchableOpacity> */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Contact Name"
          value={contactName}
          onChangeText={text => setContactName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Delivery Address"
          value={deliveryAddress}
          onChangeText={text => setDeliveryAddress(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Card Number"
          value={cardNo}
          onChangeText={text => setCardNo(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={{color: 'gray', fontSize: 15, paddingHorizontal: 15,}}>Expiry Date. : </Text>
            <DatePicker
                onDateChange = { (dob) => {setExpiryDate(dob);}}
                date = {expiryDate}
                placeholder = "select date"
                format="DD/MM/YYYY"
                mode="date"
                minDate={todaydate}
                maxDate="31-12-2030"
                confirmBtnText="Select"
                cancelBtnText="Leave It"

                style= {{paddingHorizontal: 15,}}
                customStyles={ { 
                    dateIcon: {
                        position: 'absolute',
                        right: -5,
                        top: 4,
                        marginLeft: 0,
                    },
                    placeholderText:{
                        fontSize: 15,
                        color: 'gray',
                    },
                    dateText:{
                        fontSize: 15,
                        color: 'gray',
                    },
                    dateInput:{
                        borderColor: 'gray',
                        alignItems: 'flex-start'
                    }
                } }
            />

      </View>

      <BTNComponent
      name="Pay & Order"
      func= { () =>{ orderValidation()}}
      />

      


        </View>
    )
}
export default PaymentScreen;

