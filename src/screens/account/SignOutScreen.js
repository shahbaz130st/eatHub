import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const SignOutScreen = (props) => {
    return (
        <View style={styles.mainViewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                props.navigation.navigate("OnBoardingStck")
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