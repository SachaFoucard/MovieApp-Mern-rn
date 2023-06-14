import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FilmsContext } from '../context/FilmsContext';
import Popular from '../components/Listes/Popular';
import { useNavigation } from '@react-navigation/native';

const Search = ({ blurSize }) => {
  const [input, setInput] = useState(''); // input text
  const { searchArray, PopularList } = useContext(FilmsContext);

  const [ItemsItemsFound, setItemsFound] = useState([]);

  const navigation = useNavigation()

  useEffect(() => {
    let data = searchArray.filter((films) => {
      // Check if the object has the 'original_title' property
      if (films.title && typeof films.title === 'string') {
        return films.original_title.toLowerCase().includes(input.toLowerCase());
      }
      return false;
    });
    setItemsFound(data);
  }, [input, searchArray]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.iconSearch} name="search" size={30} color="#d3d8e0" />
        <TextInput style={styles.input} placeholder='Search' onChangeText={setInput} value={input} />
        <TouchableOpacity style={styles.iconFilter}>
          <Ionicons style={styles.icon} name="md-filter" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {input.length > 0 ?
        <View style={styles.listSearch}>
          <FlatList
            data={ItemsItemsFound}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MovieScreen', { id: item })}
                  style={styles.itemContent}
                >
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                    style={styles.image}
                    resizeMode="cover"
                    blurRadius={blurSize}
                  />
                  <Text style={styles.titleText}>{item.original_title} ({item.release_date.slice(0, 4)})</Text>
                  <Text style={styles.grade}>{item.vote_average} <Ionicons style={styles.iconStar} color="#FF4343" name="star" size={15} /> </Text>
                </TouchableOpacity>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.popularity}
            contentContainerStyle={styles.contentContainer} // Added contentContainerStyle

          />
        </View>
        :
        <View>
          <Popular PopularList={PopularList} />
        </View>
      }
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    height: 60,
    backgroundColor: 'grey',
    borderRadius: 40,
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },
  grade: {
    color: '#d3d8e0',
    position:'absolute',
    top:'60%',
    left:'50%'
  },
  itemContainer: {
    position: 'relative',
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#282836',
  },
  inputContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 90
  },
  iconSearch: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    zIndex: 1,
  },
  iconFilter: {
    backgroundColor: "#FF4343",
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 19,
    marginTop: 5
  },
  icon: {
    marginTop: 11,
    marginLeft: 11.5,
    fontSize: 28
  },
  image: {
    width: 180,
    height: 230,
    borderRadius: 20,
    margin: 10
  },
  listSearch: {
    marginTop: 20
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 60,
    width: 150,
    lineHeight: 25
  },
  contentContainer: {  // Added contentContainer
    paddingBottom: 180, // Adjust the value as per your needs
  },
})
