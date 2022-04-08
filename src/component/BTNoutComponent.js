import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "../themes/commonStyles";
import { useState } from "react";

const BTNoutComponent = (props) => {

  
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={props.func}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>{props.name}</Text>
        </TouchableOpacity>

 
      </View>
    );
}

export default BTNoutComponent;