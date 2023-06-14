import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ViewAll = ({ route }) => {

  const { List } = route.params;
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}></Text>
        <FlatList style={styles.flatList}
          data={List.PopularList || List.TopRatedList || List.UpComingList || List.Top2023Film ||List.PopularSeriesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('MovieScreen', { id: item })} style={styles.itemContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                style={styles.image}
                resizeMode="cover"/>
            </TouchableOpacity>
          )}numColumns={2} // Display two items per row
        />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
  },
  flatList: {
    paddingTop: 50,
  },
  itemContainer: {
    flex: 0.5,
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 250,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    color: "white",
    paddingTop: 50,
    textAlign: 'center'
  }
});

export default ViewAll;
