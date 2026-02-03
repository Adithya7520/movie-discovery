import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import PopularMoviesScreen from "../screens/PopularMovies";
import SearchScreen from "../screens/SearchScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PopularMoviesScreen} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
