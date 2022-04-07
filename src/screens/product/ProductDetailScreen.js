import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from 'react';

import React from "react";

const ProductDetailScreen = ({navigation, route}) => {

    const [product, setProduct] = useState({});

    return (
        <ScrollView>
        <View style={styles.mainViewStyle}>
            {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                navigation.navigate("CartScreen")
            }}>
                <Text>{"Cart Screen"}</Text>
            </TouchableOpacity> */}


        <Image
          style={styles.image}
          source={{uri: 'https://images.media-allrecipes.com/userphotos/7115897.jpg'}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Title </Text>
          <Text style={styles.price}>Price </Text>
          <Text style={styles.description}>Description</Text>
            <Button
            onPress= {()=> {console.log("Hello")}}
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
})