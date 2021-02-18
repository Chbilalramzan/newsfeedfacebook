import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/LogInScreen';
import NewsFeedScreen from './src/screens/NewsFeedScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="News Feed" component={NewsFeedScreen} /> */}
      {/* </Stack.Navigator> */} 
      <Drawer.Navigator initialRouteName="News">
        <Drawer.Screen name="News" component={NewsFeedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
