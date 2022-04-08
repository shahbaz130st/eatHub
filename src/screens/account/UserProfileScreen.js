import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth, fireDB } from '../../../firebase'
import { useEffect, useState } from 'react';

import BTNComponent from "../../component/BTNComponent";
import BTNoutComponent from "../../component/BTNoutComponent";
import React from "react";
import { styles } from "../../themes/commonStyles";

const UserProfileScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainViewStyle}>
        
            <View style= {styles.orderCard}>
        <Text> User Name : </Text>
        <Text> User Email : </Text>
        <Text> Address : </Text>
        <Text> Phone No. </Text>
        <Text> Items : </Text>

            </View>


            <BTNComponent
      name="Edit"
      func= { () =>{  navigation.navigate("EditProfileScreen")}}
      />

        </View>
    )
}
export default UserProfileScreen;

