// src/navigation/SplashStack.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstSplashScreen from '../screen/Splashscreen/FirstSplashScreen';
import SecondSplashScreen from '../screen/Splashscreen/SecondSplashScreen';
import ThirdSplash from '../screen/Splashscreen/ThirdSplash ';


const Stack = createNativeStackNavigator();

const SplashStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FirstSplash" component={FirstSplashScreen} />
    <Stack.Screen name="SecondSplash" component={SecondSplashScreen} />
    <Stack.Screen name="ThirdSplash" component={ThirdSplash} />
  </Stack.Navigator>
);

export default SplashStack;
