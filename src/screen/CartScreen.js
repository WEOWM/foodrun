import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  increaseQty,
  decreaseQty,
  clearCart,
  removeFromCart,
} from '../features/meals/cartSlice';
import { COLORS } from '../utils/constants';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text>${item.price.toFixed(2)}</Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => dispatch(decreaseQty(item.idMeal))}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 8 }}>
            {item.qty}
          </Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => dispatch(increaseQty(item.idMeal))}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeFromCart(item.idMeal))}>
        <Text style={{ color: COLORS.danger }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 12 }}>
      {items.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 50 }}>
          🛒 Your cart is empty
        </Text>
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.idMeal}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => {
                dispatch(clearCart());
                navigation.navigate('OrderSuccess'); // ✅ Now works
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    elevation: 4,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 70,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  qtyBtn: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutBtn: {
    backgroundColor: COLORS.danger,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
