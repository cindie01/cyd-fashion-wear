import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" color="#fff" size={100} />
      <Text style={styles.name}>User</Text>
      <Text style={styles.email}>cyndie@example.com</Text>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#ff4b5c', padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: 700, color:"#fff"},
  email: {marginBottom: 20, color:"#fff" },
  section: { width: '100%', marginTop: 20},
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  optionText: { fontSize: 16 },
  logout: {
    marginTop: 40,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '80%',
  },
  logoutText: { color: '#ff4b5c', textAlign: 'center', fontWeight: 'bold' },
});

export default Profile;
