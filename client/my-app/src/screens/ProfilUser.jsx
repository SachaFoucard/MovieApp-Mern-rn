import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'; import React, { useContext } from 'react'
import { FilmsContext } from '../context/FilmsContext';

const ProfilUser = () => {
  const { registerUserName,registerMail } = useContext(FilmsContext)
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} // Replace with your actual profile image source
        style={styles.profileImage}
      />
      <Text style={styles.name}>{registerUserName || <Text>create an account</Text>}</Text>
      <Text style={styles.email}>{registerMail || <Text>create an account</Text>}</Text>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilUser

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  settingsButton: {
    backgroundColor: '#4287f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  settingsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
