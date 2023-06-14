import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from "@react-native-material/core";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import { FilmsContext } from '../context/FilmsContext';

const Login = ({navigation}) => {
  const { LoginUser,setLoginPassword,setLoginMail } = useContext(FilmsContext)

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={styles.icon} name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Image style={styles.img} source={require('../../assets/lo.jpg')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Sign in to your Account</Text>
      </View>
      <View>
        <TextInput onChangeText={setLoginMail} label="mail" color='#FF4343' style={styles.input} />
        <TextInput onChangeText={setLoginPassword} label="password" onMouseEnter="true" color='#FF4343' style={styles.input} />
        <View>
           <TouchableOpacity onPress={() => LoginUser(navigation)} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    alignItems: 'center',
    paddingTop: 250,
  },
  iconContainer: {
    position: 'absolute',
    top: 75,
    left: 40,
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
  img: { width: 150, height: 150 },
  icon: {
    color: 'white',
  },
  content: {
    marginBottom: 40,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  input: {
    margin: 16,
    width: 300,
    borderRadius: 40,
  },
  button: {
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF4343',
    borderRadius: 28,
    paddingVertical: 18,
    paddingHorizontal: 32,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
