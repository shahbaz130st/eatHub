import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
const AccountScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at Account Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("UserProfileScreen")
            }}>
                <Text>{"Profile"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("SettingScreen")
            }}>
                <Text>{"Setting"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("SignOutScreen")
            }}>
                <Text>{"Logout"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AccountScreen;

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
        borderRadius: 5,
        marginBottom: 20
    }
})