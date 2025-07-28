import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { bannerFood } from '../../../utils/dummyData';

const BrandBanner = () => {

  const renderItem = ({ item }) => (

    <TouchableOpacity
      style={styles.itemContainer}
    >
      <Image
        style={styles.image}
        source={{ uri: item.img }}
      />
      <Text style={styles.title}>{item.Title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={bannerFood}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
};

export default BrandBanner;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
  },
});
