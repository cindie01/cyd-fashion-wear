import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const products = [
  { id: '1', name: 'Floral Dress', image: ' ', price: '$45' },
  { id: '2', name: 'High Heels', image: '', price: '$60' },
  { id: '3', name: 'Denim Jacket', image: '', price: '$70' },
  { id: '4', name: 'Sneakers', image: '', price: '$55' },
];

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Women's Collection</Text>
      <FlatList
        data={products}
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
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 16, textAlign: 'center' },
  row: { justifyContent: 'space-between' },
  card: { backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10, marginBottom: 16, width: '48%' },
  image: { width: '100%', height: 120, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: '600', marginTop: 8 },
  price: { color: '#ff4b5c', fontWeight: 'bold', marginVertical: 4 },
  button: { backgroundColor: '#ff4b5c', borderRadius: 6, paddingVertical: 6 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 14 },
});

export default index;
