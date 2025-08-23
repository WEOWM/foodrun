import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../screen/tab/Homescreen';
import Userprofile from '../../screen/tab/Userprofile';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const TabArr = [
    { route: 'Homescreen', component: Homescreen, label: 'Home', icon: 'home' },
    {
      route: 'Profile',
      component: Userprofile,
      label: 'Profile',
      icon: 'user',
    },
    {
      route: 'ShoppingCart',
      component: Userprofile,
      label: 'Cart',
      icon: 'shoppingcart',
    },
    {
      route: 'Message',
      component: Userprofile,
      label: 'Message',
      icon: 'message1',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // show label under icons
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            // tabBarLabel: item.label,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name={item.icon} size={size} color={color} style={{top: 10}} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
