import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
export const FilmsContext = createContext();

const FilmsContextProvider = ({ children, navigation }) => {

  //films
  const [PopularList, setPopularList] = useState([]);
  const [TopRatedList, setTopRatedList] = useState([])
  const [UpComingList, setUpComingList] = useState([])
  const [Top2023Film, setTopSeriesPopular] = useState([])
  const [ListTypeFilm, setListTypeFilm] = useState([]);

  //Series
  const [PopularSeriesList, setPopularSeries] = useState([]);

  //Search Array 
  const [searchArray, setSearchArray] = useState([]);

  //Favorites Array
  const [FavoritesArray, setFavoritesArray] = useState([]);

  // User Register states
  const [registerUserName, setRegisterUserName] = useState('');
  const [registerMail, setRegisterMail] = useState('');
  const [registerPassWord1, setRegisterPassword1] = useState('');
  const [registerPassWord2, setRegisterPassword2] = useState('');

  //User Login states 
  const [LoginUMail, setLoginMail] = useState('');
  const [LoginPassword, setLoginPassword] = useState('');

  //actors 
  const [actors, setActors] = useState([]);


  const fetchPopularSeries = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };

    try {
      const response1 = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
      const page1 = await response1.json();

      const response2 = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=2', options);
      const page2 = await response2.json();

      const response3 = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=3', options);
      const page3 = await response3.json();

      const allPages = [...page1.results, ...page2.results, ...page3.results];
      setPopularSeries(allPages);
      setSearchArray(allPages) // all library films
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPopularFilm = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA',
      },
    };

    try {
      const response1 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const page1 = await response1.json();

      const response2 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', options);
      const page2 = await response2.json();

      const response3 = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=3', options);
      const page3 = await response3.json();

      const allPages = [...page1.results, ...page2.results, ...page3.results];
      setPopularList(allPages);
      setSearchArray([...allPages, allPages]) // all library films
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopRatedFilm = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };
    try {
      const response1 = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      const page1 = await response1.json()

      const response2 = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', options)
      const page2 = await response2.json()

      const response3 = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3', options)
      const page3 = await response3.json()

      const allPages = [...page1.results, ...page2.results, ...page3.results];
      setTopRatedList(allPages)
      setSearchArray([...allPages, allPages]) // all library films
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTComingSoonFilm = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };
    try {
      const response1 = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const page1 = await response1.json()

      const response2 = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', options)
      const page2 = await response2.json()

      const response3 = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3', options)
      const page3 = await response3.json()

      const allPages = [...page1.results, ...page2.results, ...page3.results];
      setUpComingList(allPages)
      setSearchArray([...allPages, allPages]) // all library films
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilmTop2023 = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };
    try {
      const response1 = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const page1 = await response1.json()

      const response2 = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', options)
      const page2 = await response2.json()

      const response3 = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3', options)
      const page3 = await response3.json()

      const allPages = [...page1.results, ...page2.results, ...page3.results];
      setTopSeriesPopular(allPages);
      setSearchArray([...allPages, allPages]) // all library films
    } catch (error) {
      console.log(error);
    }
  };

  const FetchTypeFilmByID = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };
    const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const resp = await data.json();
    setListTypeFilm(resp);
  }

  const AddFilmToFavorite = async (item) => {
    // check if the film is already added to the playlist
    if (!FavoritesArray.find((favItem) => favItem.id === item.id)) {
      setFavoritesArray((prevFavorites) => [...prevFavorites, item]);
      try {
        const response = await fetch('https://moovieapp.onrender.com/api/addfavs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mail: LoginUMail, item }),
        });
        // Handle the response if needed
      } catch (error) {
        console.error(error);
        // Handle the error
      }
    } else if (response === 409) {
      alert('Already in your favorites');
    }
  };

  const ShowFavListFromDB = async () => {
    try {
      const response = await fetch(`https://moovieapp.onrender.com/api/list/${LoginUMail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setFavoritesArray(data);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error fetching favorites:', error);
    }
  };


  const AlertRemoveFilmFromFavorite = (item) => {
    Alert.alert(
      'Delete Film ?',
      'Are you sure that you want to remove this film ?',
      [
        {
          text: 'Keep',
          onPress: () => console.log('Keeped'),
        },
        {
          text: 'Remove',
          onPress: () => RemoveFilmFromFavorite(item),
          style: 'cancel',
        },
      ],
    );
  }

  const RemoveFilmFromFavorite = (item) => {
    const newArrayFav = FavoritesArray.filter((film) => film.id !== item.id);
    setFavoritesArray(newArrayFav);
  };

  const RegisterUser = async (navigation) => {
    const name = registerUserName;
    const mail = registerMail;
    const password1 = registerPassWord1;
    const password2 = registerPassWord2;
  
    const newUser = {
      name,
      mail,
      password1,
      password2
    };
  
    const response = await fetch('https://moovieapp.onrender.com/api/addRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
  
    if (response.status === 201) {
      alert(`User created! Welcome to you ${newUser.name}`);
      navigation.navigate('NewUser');
    }
    if (response.status === 400) {
      alert(`Missing fields`);
    }
    if (response.status === 409) {
      alert(`User already exists`);
    }
    if (response.status === 404) {
      alert(`Password needs to be equal`);
    }
  
    const data = await response.json();
    console.log(data); // You can do something with the response data here
  };
  

  const LoginUser = async (navigation) => {
    const mail = LoginUMail;
    const password1 = LoginPassword;

    const user = {
      mail,
      password1
    };

    if (password1 && mail) {

      const response = await fetch(`https://moovieapp.onrender.com/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password1: password1, mail: mail })
      });

      if (response.status === 200) {
        const data = await response.json();
        alert(`Welcome back ${data.name}`);
        navigation.navigate('NewUser');
      } else if (response.status === 404) {
        alert(`User not found, try again`);
      } else if (response === 402) {
        alert('Check that all fields are not empty');
      }
    }
  };

  const GetActorsAboutFilm = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM2NzRlZWU2NTc5ZWI3ZWMxZTEyZGY2NmJlNDAwMyIsInN1YiI6IjY0NjIyNjlmOGM0NGI5MDE1M2RjMWQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeA6Vc9H6D7Bl34qAgv5dLIPBGwtQlu_v74yXGbbUbA'
      }
    };
    try {
      let data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
      let res = await data.json();  
      setActors(res);    
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    ShowFavListFromDB();
    fetchPopularFilm();
    fetchTopRatedFilm();
    fetchTComingSoonFilm();
    fetchFilmTop2023();
    FetchTypeFilmByID();
    fetchPopularSeries();

  }, [FavoritesArray]);

  const value = {
    PopularList, TopRatedList, UpComingList, Top2023Film, ListTypeFilm, PopularSeriesList, searchArray,
    setFavoritesArray, FavoritesArray, AddFilmToFavorite, AlertRemoveFilmFromFavorite, RemoveFilmFromFavorite,
    setRegisterUserName, setRegisterMail, setRegisterPassword1, setRegisterPassword2, registerUserName,
    registerMail, registerPassWord1, registerPassWord2, RegisterUser, LoginUser, setLoginMail, setLoginPassword, ShowFavListFromDB,GetActorsAboutFilm,actors
  };

  return (
    <FilmsContext.Provider value={value}>
      {children}
    </FilmsContext.Provider>
  );
}

export default FilmsContextProvider;
