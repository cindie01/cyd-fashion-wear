import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const cartItems = [
  { id: "1", name: "Floral Dress", image: "https://via.placeholder.com/100", price: "$45" },
  { id: "2", name: "High Heels", image: "https://via.placeholder.com/100", price: "$60" },
];

const Cart = () => {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")), 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="cart-outline" color="#fff" size={80} />
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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

      {/* Footer / Checkout Section */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4b5c",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    color: "#fff",
    opacity: 0.9,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.3)",
    paddingTop: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  checkoutButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  checkoutText: {
    color: "#ff4b5c",
    fontSize: 16,
    fontWeight: "bold",
  },
});
