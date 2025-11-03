import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignIn = ({ authSuccess }: { authSuccess: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = () => {

    if (isRegister && !name) {
      Alert.alert("Error", "Please enter your name");
      return;
    }
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    // Mock success (simulate login/register success)
    setTimeout(() => {
      Alert.alert(
        "Success",
        isRegister ? "Account created successfully" : "Signed in successfully"
      );
      authSuccess();
    }, 800);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Ionicons name="shirt-outline" size={60} color="#ff4b5c" />
        <Text style={styles.header}>I-CINDIE Store</Text>
      </View>

      {/* Input Fields */}
      {isRegister && (
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isRegister ? "Register" : "Sign In"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => setIsRegister(!isRegister)}
        >
          <Text style={styles.buttonOutlineText}>
            {isRegister ? "Already have an account?" : "Create Account"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "#ff4b5c",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    color:"#fff"
  },
  bottomContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    color: "#ff4b5c",
    backgroundColor:"#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff4b5c",
  },
  buttonOutline: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default SignIn;
