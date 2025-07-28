import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{flex: 1, backgroundColor: "", alignItems: "center"}}>
        <Image
       source={require('../../assetes/Illustration.png')}
        />


      </View>
      <View style={{flex: 3, backgroundColor: "blue"}}>


      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
