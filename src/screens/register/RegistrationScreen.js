import * as firebase from "firebase";
import { useEffect } from "react";

import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BTNComponent from "../../component/BTNComponent";
import { auth } from '../../../firebase'
import { styles } from "../../themes/commonStyles";
import { useState } from 'react';
import * as Location from "expo-location";
import BTNoutComponent from "../../component/BTNoutComponent";

//import { useNavigation } from '@react-navigation/core';

const RegistrationScreen = ({ navigation, route }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // const navigation = useNavigation()
  const registerValidation = () => {
    if (name === "") {
      alert("Name is required")
    }
    else if (email === "") {
      alert("Email is required")
    }
    else if (reg.test(email) == false) {
      alert("Email is invalid")
    }
    else if (password == "") {
      alert("Password is required")
    }
    else if (password.length <= 5) {
      alert("Password must be 6 characters")
    }
    else if (phone == "") {
      alert("Phone is required")
    }
    else if (address == "") {
      alert("address is required")
    }
    else {
      handleSignUp();
    }
  }
  async function GetCurrentLocation() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        // console.log(address)
        setAddress(address)
      }
    }
  };
  // const handleSignUp = async () => {
  //   try {
  //     const credential = await auth.createUserWithEmailAndPassword(email, password);
  //     const { uid } = credential;
  //     // your data here (dont forget to store the uid on the document)
  //     const user = {
  //       name: name,
  //       phone: phone,
  //       address: address,
  //       email: email,
  //       user_id: uid,
  //     };
  //     await firebase.firestore().collection('users').doc(uid).set(user);
  //   } catch {
  //     //do whatever
  //   }
  // };
  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      // First cREATE AND USER NAME

      // sECOND GET CREDIANTOIAL 
      .then(userCredentials => {
        firebase.firestore().collection('user').add({
          name: name,
          phone: phone,
          address: address,
          email: email,
          user_id: userCredentials.user.uid
        }).then(() => {
          Alert.alert(
            '',
            'User Successfuly Registered',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => navigation.navigate("Login") },
            ]
          );
        });
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        // alert("User Successfuly Registered")
      })
      .catch(error => alert(error.message))
  }


  return (

    <View
      style={styles.mainViewStyle}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="contact number"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="address"
          value={address}
          onChangeText={text => setAddress(text)}
          style={styles.input}
        />

      </View>

      <BTNoutComponent
        name="Add Current Address"
        func={() => { GetCurrentLocation() }}
      />
      <BTNComponent
        name="Register"
        func={() => { registerValidation() }}
      />

    </View>
  );

}

export default RegistrationScreen;