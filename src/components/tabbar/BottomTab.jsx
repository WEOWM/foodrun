import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../screen/tab/Homescreen';
import Userprofile from '../../screen/tab/Userprofile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartScreen from '../../screen/CartScreen';
import { useSelector } from 'react-redux';
import ChatBotScreen from '../../screen/tab/ChatBotScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  const TabArr = [
    { route: 'Hometab', component: Homescreen, label: 'Home', icon: 'home' },
    { route: 'Profile', component: Userprofile, label: 'Profile', icon: 'user' },
    { route: 'Cart', component: CartScreen, label: 'Cart', icon: 'shoppingcart', badge: cartCount },
    { route: 'Chat', component: ChatBotScreen, label: 'Message', icon: 'message1' },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
            tabBarIcon: ({ color, size }) => (
              <View>
                <AntDesign name={item.icon} size={size} color={color} />
                {/* Show badge only if cart has items */}
                {item.route === 'Cart' && cartCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {cartCount > 9 ? '9+' : cartCount}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -8,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 4,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
