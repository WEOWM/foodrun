import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomNextButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        paddingHorizontal: 55,
        padding: 20,
        borderWidth: 1,
        backgroundColor: '#FF0000',
        borderRadius: 8,
        borderColor: "#FF0000"
        
      }}
    >
      <Text style={{color: "white", fontSize: 16}}>Next</Text>
    </TouchableOpacity>
  );
};

export default CustomNextButton;

const styles = StyleSheet.create({});
