


import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../utils/constants';

const FirstSplashScreen = ({ navigation }) => {

   useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SecondSplash');
    }, 2000); // show for 2 seconds
    return () => clearTimeout(timer);
  }, [navigation]);

  
  return (
    <View style={{ flex: 1 , backgroundColor: "white"}}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: '100%', bottom: 670 }}
          source={require('../../assetes/Pattern-1.png')}
        />
      </View>

      <Image
        style={{
          width: 300,
          height: 300,
          //   backgroundColor: 'red',
          position: 'absolute',
          top: 200,
          left: 50,
        }}
        source={require('../../assetes/icon.png')}
      />
      <Text
        style={{
          position: 'absolute',
          top: 500,
          left: 95,
          fontSize: 50,
          fontWeight: 'bold',
          color: COLORS.danger,
        }}
      >
        FOOD RUN
      </Text>
    </View>
  );
};

export default FirstSplashScreen;

const styles = StyleSheet.create({});
