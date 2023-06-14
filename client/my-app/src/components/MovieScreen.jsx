import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FilmsContext } from '../context/FilmsContext';

const MovieScreen = ({ route }) => {
  const { ListTypeFilm, FavoritesArray, setFavoritesArray, AddFilmToFavorite, GetActorsAboutFilm, actors } = useContext(FilmsContext);
  const { id } = route.params;
  const navigation = useNavigation();
  const [genres, setGenres] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false); // New state to track favorite status

  const SearchTypeFromFetchUrl = async () => {
    let types = [];
    for (let i = 0; i < id.genre_ids.length; i++) {
      let obj = await ListTypeFilm.genres.find((item) => item.id === id.genre_ids[i]); //search the object
      types.push(obj.name);
    }
    return types;
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const genreNames = await SearchTypeFromFetchUrl();
      setGenres(genreNames);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    // Check if the movie is already in the favorites array
    const isMovieFavorite = FavoritesArray.some((movie) => movie.id === id.id);
    setIsFavorite(isMovieFavorite);
    GetActorsAboutFilm(id.id)
  }, [FavoritesArray, id.id]);

  const handleFavorite = () => {
    // Add or remove the movie from favorites based on the current state
    if (isFavorite) {
      const updatedFavorites = FavoritesArray.filter((movie) => movie.id !== id.id);
      setFavoritesArray(updatedFavorites);
    } else {
      AddFilmToFavorite(id);
    }
    // Toggle the favorite state
    setIsFavorite(!isFavorite);
  };
  {
    console.log("actors", actors);
  }
  return (
    <ScrollView style={styles.container}>
    {/* <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons style={styles.icon} name="chevron-back-outline" size={30} color="white" />
    </TouchableOpacity> */}
    <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${id.backdrop_path || id.poster_path}` }} />
    <Text style={styles.date}>Release date: {id.release_date || id.first_air_date}</Text>
    <Text style={styles.genre}>
      {genres.join(', ')}
    </Text>

    <FlatList
  horizontal
  data={actors.cast}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.actorContainer}>
      {item.profile_path ? (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.profile_path}` }}
          style={styles.imageActor}
        />
      ) : (
        <View style={styles.noImageActor} />
      )}
    </TouchableOpacity>
  )}
/>


    <View style={styles.underimage}>
      <Text style={styles.title}>{id.title || id.name}</Text>
      <Ionicons style={styles.iconStar} color="#FF4343" name="star" size={30} />
      <Text style={styles.grade}>{id.vote_average}</Text>
      <Text style={styles.gradeMax}>/10</Text>
    </View>
    <View style={styles.story}>
      <Text style={styles.titleStory}>Story Line</Text>
      <Text style={styles.resume}>{id.overview || 'Coach of a basketball team, irascible and rude, Marco Montes commits an assault, gets drunk and causes a car accident. In order to escape prison, he chooses to carry out a work of public utility and becomes coach of a team of intellectually handicapped people. Marco realizes that he must change his behavior if he wants to succeed in his mission.'}</Text>
      <TouchableOpacity style={[styles.paddingIcon, isFavorite && { backgroundColor: 'white' }]} onPress={handleFavorite}>
        <Ionicons style={styles.fav} color={isFavorite ? 'red' : 'white'} name="bookmark" size={22} />
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
  },
  underimage: {
    flexDirection: 'row',
    marginTop: 10
  },
  icon: {
    color: '#D7D0D0',
    position: 'relative',
    top: '30%',
    color: 'red',
  },
  imageActor:{
    width:90,
    height:90,
    borderRadius:40,
    margin:10
  },
  paddingIcon: {
    backgroundColor: '#FF4343',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 19,
    marginTop: 5,
    position: 'absolute',
    right: '2%',
    top: '-190%'
  },
  fav: {
    marginLeft: 14,
    marginTop: 12
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  iconStar: {
    position: 'absolute',
    right: 88,
    zIndex: 1
  },
  title: {
    flex: 1,
    color: '#FCFCFC',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 50
    // fontFamily: 'Roboto', // Apply the custom font family
  },
  grade: {
    fontSize: 27,
    color: '#FCFCFC',
    position: 'absolute',
    right: 38,
    fontWeight: 600
  },
  gradeMax: {
    fontSize: 15,
    color: '#D7D0D0',
    position: 'absolute',
    right: 12,
    top: 10,
    fontWeight: 200
  },
  story: {
    flex: 1,
    textAlign: 'center',
    width: 390,
    color: '#FCFCFC',
    marginLeft: 15,
    marginTop: 30
  },
  titleStory: {
    color: '#D7D0D0',
    fontSize: 20,
    fontWeight: 700
  },
  resume: {
    color: '#D7D0D0',
    lineHeight: 22,
    marginTop: 10
  },
  date: {
    color: '#D7D0D0',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10
  },
  genre: {
    color: '#D7D0D0',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10
  },
    actorContainer: {
      marginRight: 10,
    },
  
    imageActor: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  
    noImageActor: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'white',
    },
  });


export default MovieScreen;
