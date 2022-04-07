import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import React from "react";

const MenueScreen = ({ navigation, route }) => {

  const [menuData, setMenuData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getMenuFromAPI = () => {

    const apiURL = `https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json`;
    console.log(apiURL);

    fetch(apiURL)
      .then((response) => response.json()
        .then((json) => { setMenuData(json) })
        .catch((error) => { console.error(error); })
        .finally(() => setLoading(false))
      );
  }

  useEffect(() => { getMenuFromAPI() }, []);


  const renderItem = ({ item }) => (


    <Pressable style={styles.card} onPress={() => { navigation.navigate("ProductDetailScreen", { item: item }); }} >


      <Image
        style={styles.thumb}
        source={{ uri: (item.Image) }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.Title}</Text>
        <Text style={styles.price}>$ {item.Price}</Text>
      </View>

    </Pressable>
  );


  return (


    <ScrollView>

      <View style={styles.mainViewStyle}>
        {/* <Text style={{marginBottom:20}}>{"You are at Home Page"}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => {
        navigation.navigate("ProductDetailScreen")
      }}>
        <Text>{"Product Details Page"}</Text>
      </TouchableOpacity> */}

        {isLoading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          <FlatList
            data={menuData}
            keyExtractor={(item) => { return item.Id }}
            renderItem={renderItem}
          />
        )}

      </View>
    </ScrollView>

  )
}
export default MenueScreen;

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
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
})