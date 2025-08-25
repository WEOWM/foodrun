// src/navigation/AppNavigator.jsx
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashStack from './SplashStack';
import MainTabNavigator from './MainTabNavigator';
import Homescreen from '../screen/tab/Homescreen';
import BottomTab from '../components/tabbar/BottomTab';
import OrderSuccessScreen from '../screen/OrderSuccessScreen';
import AuthTabs from '../screen/auth/AuthTabs';
import LoginScreen from '../screen/auth/LoginScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';
import ChatBotScreen from '../screen/tab/ChatBotScreen';



const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  const [splashDone, setSplashDone] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setSplashDone(true), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashStack" component={SplashStack} />
      <RootStack.Screen name="Home" component={BottomTab} />
      <RootStack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      {/* <RootStack.Screen name="chat" component={ChatBotScreen} /> */}
      {/* <RootStack.Screen name="sign" component={SignUpScreen} /> */}
      
      {/* {!splashDone ? (
      ) : (
      )} */}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
