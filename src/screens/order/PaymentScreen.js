import { Picker, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useEffect, useState } from "react";

import BTNComponent from "../../component/BTNComponent";
import DatePicker from 'react-native-datepicker'
import React from "react";
import { styles } from "../../themes/commonStyles";
// import * as firebase from "firebase";
import { auth, fireDB } from '../../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentScreen = ({ navigation, route }) => {

  const [contactName, setContactName] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [expiryDate, setExpiryDate] = useState();
  const [todaydate, setDate] = useState();
  const [cardNo, setCardNo] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUid()
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    setDate(date);
  }, []);
  const getUid = async () => {
    try {
      const myArray = await AsyncStorage.getItem('uid');
      console.log(myArray)
      if (myArray !== null) {
        getUserInfo(myArray)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async function getUserInfo(uid) {
    const snapshot = await fireDB.collection('user').get();
    const listofUser = snapshot.docs.map(doc => doc.data());
    console.log(listofUser)
    for (let i = 0; i < listofUser.length; i++) {
      if (listofUser[i].user_id == auth.currentUser.uid) {
        setUser(listofUser[i])
      }
    }
  }


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

    // navigation.navigate("OrderHistoryScreen")
    fireDB.collection('order').add({
      orderNo: Math.random(),
      userId: user.user_id,
      userName: user.name,
      productArray: route?.params?.product,
      Discount: route?.params?.afterDiscountPrice,
      Subtotal: route?.params?.total,
      contactName: contactName,
      deliveryAddress: deliveryAddress,
      cardNo: cardNo,
      expiryDate: expiryDate,
      ordeTime: new Date(),
      total: route?.params?.afterDiscountPrice
    }).then(() => {
      Alert.alert(
        '',
        'Order Successfuly Placed',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => {navigation.navigate("OrderHistoryScreen")} },
        ]
      );
    });

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
        <Text style={{ color: 'gray', fontSize: 15, paddingHorizontal: 15, }}>Expiry Date. : </Text>
        <DatePicker
          onDateChange={(dob) => { setExpiryDate(dob); }}
          date={expiryDate}
          placeholder="select date"
          format="DD/MM/YYYY"
          mode="date"
          minDate={todaydate}
          maxDate="31-12-2030"
          confirmBtnText="Select"
          cancelBtnText="Leave It"

          style={{ paddingHorizontal: 15, }}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            placeholderText: {
              fontSize: 15,
              color: 'gray',
            },
            dateText: {
              fontSize: 15,
              color: 'gray',
            },
            dateInput: {
              borderColor: 'gray',
              alignItems: 'flex-start'
            }
          }}
        />

      </View>

      <BTNComponent
        name="Pay & Order"
        func={() => { orderValidation() }}
      />




    </View>
  )
}
export default PaymentScreen;

