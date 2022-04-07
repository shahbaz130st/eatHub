import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
let tempArray = []
const ProductDetailScreen = ({ navigation, route }) => {
  const [product, setProduct] = useState(route?.params?.item ? route.params.item : {});
  const [quatity, setQuantity] = useState(1)
  const getDate = async () => {
    try {
      const myArray = await AsyncStorage.getItem('cartArray');
      if (myArray !== null) {
        // We have data!!
        console.log("not null called", JSON.parse(myArray));
        tempArray = JSON.parse(myArray)
        let value = tempArray.findIndex(checkAge);
        function checkAge(item) {
          return item.Id == product.Id;
        }
        if (value == -1) {
          tempArray.push(product)
          await storeData(tempArray);
          navigation.navigate("CartScreen")
        } else {
          const updatedData = tempArray.map(x => (x.Id == product.Id ? { ...x, quantity: quatity } : x));
          await storeData(updatedData);
          navigation.navigate("CartScreen")
        }

        // const updatedData = tempArray.map(x => (x.Id == product.Id ? { ...x, quantity: quatity } : x));
        // console.log(updatedData)
        // product.quantity = quatity
        // tempArray.push(product)
        // await storeData(tempArray);
        // navigation.navigate("CartScreen")
        // let modifyArray = []
        // // for (let i = 0; i < tempArray.length; i++) {
        // //   if (tempArray[i].Id == product.Id) {
        // //     modifyArray.push({ ...product, quantity: quatity })
        // //   }
        // //   else {
        // //     modifyArray.push(product)
        // //   }
        // // }
        // console.log("call", modifyArray.length, modifyArray)
        // await storeData(modifyArray);

        // let newArr = tempArray.map(obj => {
        //   if (obj.Id == product.Id) {
        //     return { ...obj, quantity: quatity };
        //   } else {
        //     tempArray.push(product)
        //   }
        // });

        // navigation.navigate("CartScreen")
      }
      else if (myArray == null) {
        product.quantity = quatity
        tempArray.push(product)
        storeData(tempArray)
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  const storeData = async (value) => {
    console.log(value)
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('cartArray', jsonValue)
      // getDate()
    } catch (e) {
      // saving error
    }
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.mainViewStyle}>
        <Image
          style={styles.image}
          source={{ uri: product?.Image }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product?.Title} </Text>
          <Text style={styles.price}>{product?.Price}</Text>
          <Text style={styles.description}>{product?.Description}</Text>
          <View style={{ flexDirection: "row", marginBottom: 10, width: 100, justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => { setQuantity(quatity + 1) }}>
              <Text>{"+"}</Text>
            </TouchableOpacity>
            <TextInput
              value={quatity.toString()} />
            <TouchableOpacity style={styles.quantityButton}
              onPress={() => { if (quatity > 1) { setQuantity(quatity - 1) } }}>
              <Text>{"---"}</Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => {
              getDate()
            }}
            title="Add to cart"
          />
        </View>

      </View>
    </ScrollView>
  )
}
export default ProductDetailScreen;

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
  image: {
    height: 300,
    width: '100%'
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
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  quantityButton: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
})