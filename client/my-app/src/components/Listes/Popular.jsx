import React from 'react';
import { View, ScrollView, StyleSheet, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { Text } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

const Popular = ({ PopularList,blurSize }) => {
    const navigation = useNavigation();
    const popularLimited = PopularList.slice(0, 10); // Create a new array with the first 10 objects

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.pop}>Popular</Text>
                <TouchableOpacity>
                    <Button title='View all' color="#FF4343" onPress={()=>navigation.navigate('ViewAll',{List:{PopularList}})} />
                </TouchableOpacity>
            </View>
            {PopularList && (
                <View style={styles.diaporama}>
                    <FlatList
                        horizontal
                        data={popularLimited}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('MovieScreen',{id:item})}
                            style={styles.itemContainer} >
                                <Image
                                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                                    style={styles.image}
                                    resizeMode="cover"
                                    blurRadius={blurSize}
                                />
                                <View style={styles.overlay} />
                                <Text style={styles.titleText}>{item.original_title}</Text>
                            </TouchableOpacity>
                        )}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(id) => id.popularity}
                    />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282830',
    },
    diaporama:{
        marginTop:20,
        marginLeft:10
,    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
    },
    pop: {
        fontSize: 30,
        marginLeft: 20,
        color: 'white',
    },
    itemContainer: {
        position: 'relative',
        marginRight: 10,
    },
    image: {
        width: 180,
        height: 230,
        borderRadius: 20,
        
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    titleText: {
        position: 'absolute',
        bottom: 20,
        left: 5,
        color: 'white',
        fontSize: 22,
        fontWeight:600,
        zIndex: 2,
    },
});

export default Popular;
