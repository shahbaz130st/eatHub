import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import BTNComponent from "../../component/BTNComponent";
import BTNoutComponent from "../../component/BTNoutComponent";
import React from "react";
import TabHeaderComponenet from "../../component/TabHeaderComponenet";
import { auth } from '../../../firebase'
import { styles } from "../../themes/commonStyles";

const AccountScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
            <TabHeaderComponenet name="User Name"/>

            <BTNoutComponent
            
             name="Profile"
             func= { () =>{ navigation.navigate("UserProfileScreen")}}
        
            />

<BTNoutComponent
            
            name="Settings"
            func= { () =>{ navigation.navigate("SettingScreen")}}
       
           />

<BTNoutComponent
            
            name="Signout"
            func= { () =>{ navigation.navigate("SignOutScreen")}}
       
           />
       
        </View>
    )
}
export default AccountScreen;

