import LoginScreen from '../screens/login/LoginScreen';
import React from "react";
import RegistrationScreen from '../screens/register/RegistrationScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const OnBoardingStack = createNativeStackNavigator();

const OnBoarding = () => {
    return (
        <OnBoardingStack.Navigator  screenOptions={{ 
            headerStyle: {backgroundColor: '#FF4500',  textTransform: 'uppercase'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            textTransform: 'uppercase'
            }} >
            <OnBoardingStack.Screen name="Login" component={LoginScreen} />
            <OnBoardingStack.Screen name="User Registration" component={RegistrationScreen} />
        </OnBoardingStack.Navigator>
    )
}
export default OnBoarding;