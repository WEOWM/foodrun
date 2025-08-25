import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsByCategory } from '../../../features/meals/mealSlice';
import { addToCart } from '../../../features/meals/cartSlice';

const PopularCard = () => {
  const dispatch = useDispatch();
  const { meals, loadingMeals, error, selectedCategory } = useSelector(
    (state) => state.meals
  );

  useEffect(() => {
    const category = selectedCategory || 'Beef';
    dispatch(fetchMealsByCategory(category));
  }, [dispatch, selectedCategory]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: item.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.strMeal}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
          {selectedCategory}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>$12.99</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => dispatch(addToCart({ ...item, price: 12.99 }))}
          >
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loadingMeals) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.danger} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: COLORS.danger }}>⚠ {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={meals}
      renderItem={renderItem}
      keyExtractor={(item) => item.idMeal}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10, gap: 12 }}
    />
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    padding: 12,
    alignItems: 'center',
    marginVertical:2
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.danger,
  },
  addBtn: {
    backgroundColor: COLORS.danger,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
