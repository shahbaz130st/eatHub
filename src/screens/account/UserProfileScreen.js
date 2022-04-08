import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from 'react';

import BTNComponent from "../../component/BTNComponent";
import BTNoutComponent from "../../component/BTNoutComponent";
import React from "react";
import { styles } from "../../themes/commonStyles";
import { auth, fireDB } from '../../../firebase'

const UserProfileScreen = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUserInfo()
      }, []);
    async function getUserInfo() {
        const snapshot = await fireDB.collection('user').get();
        const listofUser = snapshot.docs.map(doc => doc.data());
        console.log(listofUser)
        for (let i = 0; i < listofUser.length; i++) {
            console.log(listofUser[i])
          if (listofUser[i].user_id == auth.currentUser.uid) {
            setUser(listofUser[i])
          }
        }
      }
    return (
        <View style={styles.mainViewStyle}>
        
            <View style= {styles.orderCard}>
        <Text> {"User Name :"+user.name} </Text>
        <Text> {"User Email : "+user.email}</Text>
        <Text> {"Address : "+user.address}</Text>
        <Text> {"Phone No. "+user.phone}</Text>

            </View>


            <BTNComponent
      name="Edit"
      func= { () =>{  navigation.navigate("EditProfileScreen")}}
      />

        </View>
    )
}
export default UserProfileScreen;

