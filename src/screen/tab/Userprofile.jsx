import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../utils/constants'; // use your COLORS file

const UserProfile = () => {
  const navigation = useNavigation();

  // ✅ State for user info
  const [user, setUser] = useState({
    name: '',
    email: '',
    photo: '',
    occupation: 'Manager', // optional default
    employer: 'Overlay Design', // optional default
    phone: '+4574621587', // optional default
  });

  // ✅ Fetch user data from AsyncStorage
  useEffect(() => {
    const getUserData = async () => {
      const name = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');
      const photo = await AsyncStorage.getItem('userPhoto');

      setUser({
        ...user,
        name: name || 'Basim Shareef',
        email: email || 'basims@gmail.com',
        photo: photo || 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000',
      });
    };
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => navigation.navigate('Homescreen')}
        >
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.iconBox}>
          <Ionicons name="notifications" size={20} color="#fff" />
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.photo }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.subtitle}>{user.occupation} • {user.employer}</Text>
      </View>

      {/* Personal Info */}
      <Text style={styles.sectionTitle}>Personal Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Your Name: {user.name}</Text>
        <Text style={styles.infoText}>Occupation: {user.occupation}</Text>
        <Text style={styles.infoText}>Employer: {user.employer}</Text>
      </View>

      {/* Contact Info */}
      <Text style={styles.sectionTitle}>Contact Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>📞 Phone: {user.phone}</Text>
        <Text style={styles.infoText}>📧 Email: {user.email}</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.danger,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.danger,
  },
  username: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 10,
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
    color: '#444',
  },
});
