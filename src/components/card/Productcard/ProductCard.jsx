import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../features/meals/cartSlice';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 16; // two cards per row with spacing

const PopularCard = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.strMeal}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
          Delicious & healthy meal to enjoy
        </Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>$12.99</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => dispatch(addToCart({ ...item, price: 12.99 }))}
          >
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={meals}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    margin: 4,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 130,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.danger,
  },
  addBtn: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
