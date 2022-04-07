import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const SettingScreen = (props) => {
    return (
        <View style={styles.mainViewStyle}>
            <Text style={{ marginBottom: 20 }}>{"You are at Setting Page"}</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                props.navigation.goBack()
            }}>
                <Text>{"Go Back"}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SettingScreen;

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