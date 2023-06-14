import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const FirstScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.registerPage}>
                <Image source={require('../../assets/firstScreenSuperman-ConvertImage.jpg')} style={styles.image} />
                <Text style={styles.title}>You are almost there!</Text>
                <Text style={styles.subsititle}>Sign in or Sign up to continue</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.account} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.accountSentence}>Don't Have an Account ? <Text style={styles.btnSignUp}>Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282830',
    },
    registerPage: {
        flex: 1,
        backgroundColor: '#282830',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 50,
        position: 'absolute',
        top: '40%',
        width: 330,
        textAlign: 'center',
        fontWeight: '700',
    },
    subsititle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '100',
        position: 'absolute',
        top: '55%',
    },
    image: {},
    button: {
        backgroundColor: '#FF4343',
        borderRadius: 28,
        paddingVertical: 18,
        paddingHorizontal: 32,
        width: 300,
        marginTop: 20,
        position: 'absolute',
        top: '60%'

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    account: {
        position: 'absolute',
        top: '80%',
        flex:1
    },
    accountSentence: {color:'white'},
    btnSignUp: { color: '#FF4343' }
});

export default FirstScreen;
