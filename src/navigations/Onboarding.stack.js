import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/login/LoginScreen';
import RegistrationScreen from '../screens/register/RegistrationScreen';

const OnBoardingStack = createNativeStackNavigator();

const OnBoarding = () => {
    return (
        <OnBoardingStack.Navigator >
            <OnBoardingStack.Screen name="Login" component={LoginScreen} />
            <OnBoardingStack.Screen name="User Registration" component={RegistrationScreen} />
        </OnBoardingStack.Navigator>
    )
}
export default OnBoarding;