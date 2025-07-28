import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { bugger } from '../../../utils/dummyData';

const ProductCard = () => {
    
  const renderItem = ({ item }) => (

    <View style={{ flexDirection: 'row', gap: 20, padding: 6 }}>
      <View style={styles.card}>
        <Text style={styles.price}>{item?.price}</Text>
        <View style={{ alignItems: 'center' }}>
          <Image
           source={{ uri: item.img }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item?.title}</Text>
        <Text style={styles.subTitle} numberOfLines={2} ellipsizeMode='tail'>
          {item?.subtitle}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 8,
              color: '#FF0000',
            }}
          >
           {item?.price}
          </Text>
          <Image
          style={styles.icon}
          source={require('../../../assetes/Group3-31-Frame9-31-Frame10-31-Frame11-31-Frame21-31-Frame28-31-Frame46-31-iPhone13mini-1.png')}
        />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bugger}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
   card: {
    width: 165,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 4,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginTop: 5,
  },
  title: {
    marginTop: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    color: 'black',
    fontSize: 13,paddingTop: 8
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
