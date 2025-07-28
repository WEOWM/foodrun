import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';


const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
