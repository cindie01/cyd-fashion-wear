import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const cartItems = [
  { id: '1', name: 'Floral Dress', image: 'https://via.placeholder.com/100', price: '$45' },
  { id: '2', name: 'High Heels', image: 'https://via.placeholder.com/100', price: '$60' },
];

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: $105</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  cartItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { color: '#ff4b5c', fontWeight: 'bold' },
  footer: { borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 12, marginTop: 12 },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  checkoutButton: { backgroundColor: '#ff4b5c', padding: 12, borderRadius: 8 },
  checkoutText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default Cart;
