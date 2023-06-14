import { StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home'
import Favorites from './src/screens/Favorites';
import Search from './src/screens/Search';
import ProfilUser from './src/screens/ProfilUser';
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import FirstScreen from './src/screens/FirstScreen'
import FilmsContextProvider from './src/context/FilmsContext';
import Popular from './src/components/Listes/Popular';
import ViewAll from './src/components/ViewAll';
import MovieScreen from './src/components/MovieScreen';
import TopRated from './src/components/Listes/TopRated';
import ComingSoon from './src/components/Listes/ComingSoon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <FilmsContextProvider>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen initialRouteName='FirstScreen' name='FirstScreen' component={FirstScreen}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='NewUser' component={NewUser} options={{ headerShown: false }} />
      <Stack.Screen name="Popular" component={Popular}/>
      <Stack.Screen name="ViewAll" component={ViewAll}/>
      <Stack.Screen name="MovieScreen" component={MovieScreen}/>
      <Stack.Screen name='TopRated' component={TopRated}/>
      <Stack.Screen name='ComingSoon' component={ComingSoon}/>


      </Stack.Navigator>
    </NavigationContainer>
    </FilmsContextProvider>
  );
}

export const NewUser = () => {
 
  return (
    <>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search-outline';
        } else if (route.name === "Favorites") {
          iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline';
        } else if (route.name === "Profile") {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, 
      tabBarStyle: { backgroundColor: '#282830' }, // Set the background color here

    })}
  >
    
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={ProfilUser} />
  </Tab.Navigator>
  </>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
