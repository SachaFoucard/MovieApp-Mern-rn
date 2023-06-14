import { Text, ScrollView, StyleSheet, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FilmsContext } from '../context/FilmsContext';

const Favorites = ({ blurSize, navigation }) => {
  const [inputFavorite, setInputFavorite] = useState(''); // input favorite film
  const [filmsFound, setFilmsFound] = useState([]);
  const { ShowFavListFromDB, FavoritesArray, AlertRemoveFilmFromFavorite, RemoveFilmFromFavorite } = useContext(FilmsContext);

  useEffect(() => {
    const filteredFilms = FavoritesArray.filter((film) => {
      // Check if the object has the 'original_title' property
      if (film.title && typeof film.title === 'string') {
        return film.original_title.toLowerCase().includes(inputFavorite.toLowerCase());
      }
      return false;
    });

    setFilmsFound(filteredFilms);
  }, [inputFavorite, FavoritesArray]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.iconSearch} name="search" size={30} color="#d3d8e0" />
        <TextInput style={styles.input} placeholder='Search' onChangeText={setInputFavorite} value={inputFavorite} />
      </View>
      <View style={styles.listSearch}>
        {filmsFound.length === 0 ? ( // show all playlist
          <FlatList
            data={FavoritesArray}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MovieScreen', { id: item.id })}
                  style={styles.itemContent}
                >
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                    style={styles.image}
                    resizeMode="cover"
                    blurRadius={blurSize}
                  />
                  <Text style={styles.titleText}>
                    {item.name || item.original_title} ({item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || '2020'})
                  </Text>
                  <Text style={styles.grade}>{item.vote_average} <Ionicons style={styles.iconStar} color="#FF4343" name="star" size={15} /></Text>
                  <Ionicons onPress={() => AlertRemoveFilmFromFavorite(item)} style={styles.fav} color="#FF4343" name="bookmark" size={22} />
                </TouchableOpacity>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id ? item.id.toString() : item.name}
            contentContainerStyle={styles.contentContainer}
          />
        ) : ( // show playlist with text into the input search
          <FlatList
            data={filmsFound}
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
                  <Text style={styles.titleText}>{item.name || item.original_title} ({item.release_date.slice(0, 4) || item.first_air_date.slice(0, 4) || '2020'})</Text>
                  <Text style={styles.grade}>{item.vote_average} <Ionicons style={styles.iconStar} color="#FF4343" name="star" size={15} /> </Text>
                  <Ionicons onPress={() => AlertRemoveFilmFromFavorite(item)} style={styles.fav} color="#FF4343" name="bookmark" size={22} />
                </TouchableOpacity>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.popularity}
            contentContainerStyle={styles.contentContainer}
          />
        )}
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830'
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
  grade: {
    color: '#d3d8e0',
    position: 'absolute',
    top: '60%',
    left: '54%',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 60,
    width: 150,
    lineHeight: 25,
    marginLeft: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 370,
    height: 60,
    backgroundColor: 'grey',
    borderRadius: 40,
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },
  itemContainer: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 180,
    height: 230,
    borderRadius: 30,
    marginLeft: 25,
    marginTop: 25
  },
  contentContainer: {
    paddingBottom: 180,
  },
  fav: {
    position: 'absolute',
    top: '55%',
    right: '5%'
  }
});
