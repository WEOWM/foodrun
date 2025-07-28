// src/navigation/AppNavigator.jsx
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashStack from './SplashStack';
import MainTabNavigator from './MainTabNavigator';
import Homescreen from '../screen/Homescreen';

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
      <RootStack.Screen name="Home" component={Homescreen} />
      {/* {!splashDone ? (
      ) : (
      )} */}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
