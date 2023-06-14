import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { TextInput } from "@react-native-material/core";

import Ionicons from '@expo/vector-icons/Ionicons';
import { FilmsContext } from '../context/FilmsContext';

const Register = ({ navigation }) => {

  const {RegisterUser, setRegisterUserName, setRegisterMail, setRegisterPassword1, setRegisterPassword2 } = useContext(FilmsContext)
  
return (
  <>
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
        <Text style={styles.title}>Sign Up to your Account</Text>
      </View>
      <View>
        <TextInput placeholder="Last Name & First Name" color='#FF4343' style={styles.input} onChangeText={setRegisterUserName} />
        <TextInput placeholder="Email" onMouseEnter="true" color='#FF4343' style={styles.input} onChangeText={setRegisterMail} />
        <TextInput placeholder="Password" onMouseEnter="true" color='#FF4343' style={styles.input} onChangeText={setRegisterPassword1} />
        <TextInput placeholder="Password" onMouseEnter="true"  color='#FF4343' style={styles.input}  onChangeText={setRegisterPassword2}/>

        <View>
          <TouchableOpacity  style={styles.button}>
            <Text onPress={()=>RegisterUser(navigation)} style={styles.buttonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    alignItems: 'center',
    paddingTop: 50,
  },
  iconContainer: {
    position: 'absolute',
    top: 75,
    left: 40,
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 50,
  },
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
  img: { width: 150, height: 150 },
});
export default Register;
