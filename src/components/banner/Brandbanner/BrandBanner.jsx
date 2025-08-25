import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchMealsByCategory,
  setCategoryId,
} from '../../../features/meals/mealSlice';

const BrandBanner = () => {
  const dispatch = useDispatch();

  // ✅ get categories, selectedCategory, loading, error from redux
  const { categories, selectedCategory, loadingCategories, error } = useSelector(
    (state) => state.meals
  );

  // ✅ fetch categories when component mounts
  useEffect(() => {
    dispatch(fetchCategories()).then((res) => {
      if (res.payload && res.payload.length > 0) {
        const firstCategory = res.payload[0].strCategory;
        // auto-select and load meals
        dispatch(setCategoryId(firstCategory));
        dispatch(fetchMealsByCategory(firstCategory));
      }
    });
  }, [dispatch]);

  const handlePress = (categoryName) => {
    dispatch(setCategoryId(categoryName)); // store in redux
    dispatch(fetchMealsByCategory(categoryName)); // fetch meals for clicked category
    console.log('Selected:', categoryName);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedCategory === item.strCategory;

    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          isSelected && { borderColor: 'green', backgroundColor: '#eee' }, // highlight selected
        ]}
        onPress={() => handlePress(item.strCategory)}
      >
        <Image
          style={styles.image}
          source={{ uri: item.strCategoryThumb }}
        />
        <Text style={styles.title}>{item.strCategory}</Text>
      </TouchableOpacity>
    );
  };

  if (loadingCategories) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.idCategory}
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
