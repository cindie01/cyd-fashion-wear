import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Clothes = [
  { id: '1', name: 'Floral Dress', image: 'https://i.imgur.com/5RjJGkS.jpg', price: '$45' },
  { id: '2', name: 'Denim Jacket', image: 'https://i.imgur.com/rLEJwXb.jpg', price: '$70' },
  { id: '3', name: 'Casual Blouse', image: 'https://i.imgur.com/9M0pZcZ.jpg', price: '$50' },
];

const Shoes = [
  { id: '1', name: 'High Heels', image: 'https://i.imgur.com/ds6LZzY.jpg', price: '$60' },
  { id: '2', name: 'Sneakers', image: 'https://i.imgur.com/yY3R6hD.jpg', price: '$55' },
  { id: '3', name: 'Sandals', image: 'https://i.imgur.com/tW8Tj3z.jpg', price: '$40' },
];

const Shop = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Icon and Title */}
      <View style={styles.header}>
        <Ionicons name="shirt-outline" size={60} color="#fff" />
        <Text style={styles.mainTitle}>I-CINDIE Store</Text>
        <Text style={styles.subtitle}>Trendy Clothes & Stylish Shoes for Women</Text>
      </View>
      <Text style={styles.title}>Women’s Clothes</Text>
      <FlatList
        data={Clothes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}/>
      <Text style={styles.title}>Women’s Shoes</Text>
      <FlatList
        data={Shoes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4b5c',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: 'white',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    width: '48%',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
  },
  price: {
    color: '#ff4b5c',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#ff4b5c',
    borderRadius: 6,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Shop;
