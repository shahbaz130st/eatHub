import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from "./App.style";
import Routing from "../navigations/Routing.stack";

export default function App() {
  return (
    <View style={styles.mainView}>
      <StatusBar
        translucent={true}
        hidden={true} />
      <Routing />
    </View>
  );
}

