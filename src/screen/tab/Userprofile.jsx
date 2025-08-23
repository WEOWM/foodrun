import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Userprofile = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container} >
      {/* Header */}
      <View  style={styles.header} >
        <TouchableOpacity  style={styles.iconBox} onPress={()=> navigation.replace("Home")}>
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity >
        <View style={styles.iconBox}>
          <Ionicons name="notifications" size={20} color="#fff" />
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Basim Shareef</Text>
        <Text style={styles.subtitle}>Manager • Overlay Design</Text>
      </View>

      {/* Personal Info */}
      <Text style={styles.sectionTitle}>Personal Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Your Name: Basim Shareef</Text>
        <Text style={styles.infoText}>Occupation: Manager</Text>
        <Text style={styles.infoText}>Employer: Overlay Design</Text>
      </View>

      {/* Contact Info */}
      <Text style={styles.sectionTitle}>Contact Info</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>📞 Phone: +4574621587</Text>
        <Text style={styles.infoText}>📧 Email: basims@gmail.com</Text>
      </View>
    </View>
  );
};

export default Userprofile;

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
    backgroundColor: '#FF3B30',
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
    borderColor: '#FF3B30',
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
