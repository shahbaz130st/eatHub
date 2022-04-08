import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, fireDB } from '../../../firebase'
const login = StackActions.replace("OnBoardingStck")
const SignOutScreen = (props) => {
    const onSignoutPress = () => {
        auth.signOut()
            .then(console.log('signed out'))
        AsyncStorage.clear()
        props.navigation.dispatch(login)
    }
    return (
        <View style={styles.mainViewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                onSignoutPress()
            }}>
                <Text>{"Sign Out"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignOutScreen;

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    buttonStyle: {
        borderColor: "#FF4500",
        borderWidth: 1,
        padding: 15,
        borderRadius: 5
    }
})