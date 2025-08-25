import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';

const OrderSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.subtitle}>Your order has been completed successfully.</Text>

      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate('Home')} // 👈 navigate back to Home
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  homeBtn: {
    backgroundColor: COLORS.danger,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
