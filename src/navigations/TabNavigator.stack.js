import AccountScreen from "../screens/account/AccountScreen";
import CartScreen from "../screens/cart/CartScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenueScreen from "../screens/Menue/MenueScreen";
//import OrderScreen from "../screens/order/OrderScreen";
import OrderHistoryScreen from "../screens/order/OrderHistoryScreen";
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MenueScreen"
      activeColor="#f0edf6"
      inactiveColor="yellow"
      barStyle={{ backgroundColor: '#FF4500' }}
    >
      <Tab.Screen
        name="MenueScreen"
        component={MenueScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          headerTitle: 'Product Details', 
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="order-bool-ascending-variant" size={26} color={color} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          tabBarLabel: 'Order',
          headerTitle: 'Order History', 
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="order-bool-ascending-variant" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-supervisor" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  )
}
export default TabNavigator;