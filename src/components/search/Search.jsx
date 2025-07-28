import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
  return (
    <LinearGradient
      colors={['#FFF0F0', '#FFDFDF']}
      style={styles.container}
    >
      <Image
        style={styles.icon}
        source={require('../../assetes/Frame-31-Group3120-31-Group3121-31-iPhone13mini-1.png')}
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="gray" 
        style={styles.input}
      />
    </LinearGradient>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: 370,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFF0F0',
    flex: 1, 
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 40,
    backgroundColor: '#fff', 
    color: "black"
  },
});
