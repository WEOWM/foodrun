import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../utils/constants';

const AuthTabs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    // Load user from AsyncStorage on mount
    const loadUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) setSavedUser(JSON.parse(user));
    };
    loadUser();
  }, []);

  const handleSave = async () => {
    if (!name || !email) {
      Alert.alert('Error', 'Name and Email are required');
      return;
    }
    const userData = { name, email, photo };
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    setSavedUser(userData);
    Alert.alert('Success', 'User saved successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>

      {savedUser && (
        <View style={styles.userCard}>
          {savedUser.photo ? (
            <Image source={{ uri: savedUser.photo }} style={styles.avatar} />
          ) : null}
          <Text style={styles.userText}>Name: {savedUser.name}</Text>
          <Text style={styles.userText}>Email: {savedUser.email}</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Photo URL (optional)"
        value={photo}
        onChangeText={setPhoto}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.danger,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  saveBtn: {
    backgroundColor: COLORS.danger,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  userText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
