import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for the clothes icon
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* E-commerce Icon */}
      <Ionicons name="shirt-outline" size={100} color="#fff" style={styles.icon} />

      {/* Store Title */}
      <Text style={styles.title}>I-CINDIE</Text>

      {/* Description */}
      <Text style={styles.description}>
        Welcome to I-CINDIE — your go-to fashion store for women’s shoes and
        clothes. Shop the latest trends in comfort and style!
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => router.push("/shop")}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => alert("Join I-CINDIE Plus coming soon!")}>
          <Text style={styles.buttonText2}>Join I-CINDIE Plus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4b5c", // red theme
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  shopButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  joinButton: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ff4b5c",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonText2: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});







