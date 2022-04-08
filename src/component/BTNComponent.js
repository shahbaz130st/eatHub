import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "../themes/commonStyles";
import { useState } from "react";

const BTNComponent = (props) => {

  
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={props.func}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>

      </View>
    );
}

export default BTNComponent;