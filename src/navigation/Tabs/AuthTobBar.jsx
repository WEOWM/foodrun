import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewPager from 'react-native-pager-view';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator () 

const SignUpScreen = () => (
  <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Sign Up Form goes here</Text>
  </View>
);

const LoginScreen = () => (
  <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Login Form goes here</Text>
  </View>
);

const AuthTobBar = () => {
  return (
   <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: { backgroundColor: 'red' },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: { fontSize: 16 },
      }}
    >
      <Tab.Screen name="SignUp" component={SignUpScreen} options={{ tabBarLabel: 'Sign Up' }} />
      <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }} />
    </Tab.Navigator>
  // <View>
  //   <Text>hffhfuhf</Text>
  // </View>
  )
}

export default AuthTobBar

const styles = StyleSheet.create({})