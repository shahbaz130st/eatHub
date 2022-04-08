import ConfirmationScreen from "../screens/order/ConfirmationScreen";
import EditProfileScreen from "../screens/account/EditProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingStck from "./Onboarding.stack";
//import OrderHistoryScreen from "../screens/order/OrderHistoryScreen";
import OrderReviewScreen from "../screens/order/OrderReviewScreen";
import OrderScreen from "../screens/order/OrderScreen";
import PaymentScreen from "../screens/order/PaymentScreen";
import ProductDetailScreen from "../screens/product/ProductDetailScreen";
import React from "react";
import SettingScreen from "../screens/account/SettingScreen";
import SignOutScreen from "../screens/account/SignOutScreen";
import TabNavigatorStack from "./TabNavigator.stack";
import UserProfileScreen from "../screens/account/UserProfileScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
const Routing = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false,
             headerStyle: {backgroundColor: '#FF4500',  textTransform: 'uppercase'},
             headerTintColor: '#fff',
             headerTitleStyle: {fontWeight: 'bold'},
            
             }}>
                <RootStack.Screen name="OnBoardingStck" component={OnBoardingStck} />
                <RootStack.Screen name="TabNavigatorStack" component={TabNavigatorStack} />
                <RootStack.Screen name="SignOutScreen" component={SignOutScreen} />
                <RootStack.Screen name="SettingScreen" component={SettingScreen} options={{headerTitle: 'Settings', headerShown: true}} />
                <RootStack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{headerTitle: 'Profile', headerShown: true}} />
                <RootStack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{headerTitle: 'Product Details', headerShown: true}} />
                <RootStack.Screen name="PaymentScreen" component={PaymentScreen} options={{headerTitle: 'Payment Information', headerShown: true}} />
                <RootStack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
                <RootStack.Screen name="OrderReviewScreen" component={OrderReviewScreen} options={{headerTitle: 'Order Review', headerShown: true}} />
                {/* <RootStack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} options={{headerTitle: 'Order History', headerShown: true}} /> */}
                <RootStack.Screen name="OrderScreen" component={OrderScreen} options={{headerTitle: 'order', headerShown: true}} />
                <RootStack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerTitle: 'Edit Profile', headerShown: true}}  />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Routing;