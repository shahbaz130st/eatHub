import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { styles } from "../../themes/commonStyles";
const AccountScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <TabHeaderComponenet name="User Name"/>
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

// const styles = StyleSheet.create({
//     mainViewStyle: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "white"
//     },
//     buttonStyle: {
//         borderColor: "#FF4500",
//         borderWidth: 1,
//         padding: 15,
//         borderRadius: 5,
//         marginBottom: 20
//     }
// })