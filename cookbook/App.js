import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "@fontsource/playfair-display"; 
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Add from './Add';
import RecipeView from './RecipeView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="RecipeView" component={RecipeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;