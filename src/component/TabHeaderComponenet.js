import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useState } from "react";

const TabHeaderComponenet = (props) => {

  
    return(
        <View style={{ height: 60, width: "100%", alignItems: "flex-start", justifyContent: "center",  backgroundColor: '#FF4500' }}>
            {/* <Text>  { props.unitPrice } </Text> */}
            <Text style={{marginLeft: 15, fontSize: 24, fontWeight: "bold", color: 'white'   }}>{props.name}</Text>
        </View>
    );
}

export default TabHeaderComponenet;