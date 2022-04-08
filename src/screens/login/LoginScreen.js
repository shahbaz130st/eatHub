import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import BTNComponent from "../../component/BTNComponent";
import BTNoutComponent from "../../component/BTNoutComponent";
import { StackActions } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../../firebase'
import { styles } from "../../themes/commonStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const mainApp = StackActions.replace("TabNavigatorStack")
const LoginScreen = ({ navigation, route }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // navigation.replace("RegistrationScreen")

      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    console.log("Executed every time the component receives new state or prop");
  });
  const loginValidation = () => {
    if (email === "") {
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
    else {
      handleLogin();
    }
  }
  const navRegister = () => {

    navigation.navigate("User Registration")
  }
  const handleLogin = () => {
    auth
      // First cREATE AND USER NAME
      .signInWithEmailAndPassword(email, password)
      // sECOND GET CREDIANTOIAL 
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.uid);
        AsyncStorage.setItem("isLogin", "true")
        AsyncStorage.setItem("uid", user.uid)
        navigation.dispatch(mainApp)
        //  navigation.navigate("HomeScreen", {useremail: email })
        // navigation.replace('HomeScreen')

      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={styles.inputContainer}>
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
      </View>



      <BTNComponent
        name="Login"
        func={() => { loginValidation() }}
      />
      <BTNoutComponent
        name="Register"
        func={() => { navRegister() }}
      />



    </View>


  );

}

export default LoginScreen;