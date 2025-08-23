// src/navigation/AppNavigator.jsx
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashStack from './SplashStack';
import MainTabNavigator from './MainTabNavigator';
import Homescreen from '../screen/tab/Homescreen';
import BottomTab from '../components/tabbar/BottomTab';



const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  const [splashDone, setSplashDone] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setSplashDone(true), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootStack.Screen name="SplashStack" component={SplashStack} /> */}
      <RootStack.Screen name="Home" component={BottomTab} />
      
      {/* {!splashDone ? (
      ) : (
      )} */}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
