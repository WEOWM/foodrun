import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../../utils/constants';
import { popularMeals } from '../../../utils/dummyData';

const PopularCard = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        elevation: 6,
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginVertical: 3,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={item.img}
          style={{ width: 100, height: 80, borderRadius: 12 }}
        />
        <View style={{ marginHorizontal: 22, justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ color: 'gray' }}>{item.subtitle}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.danger,
          }}
        >
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={popularMeals}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      //   horizontal
      showsHorizontalScrollIndicator
      contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
    />
  );
};

export default PopularCard;

const styles = StyleSheet.create({});
