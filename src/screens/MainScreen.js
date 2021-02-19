import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScree';
import NewsFeedScreen from './NewsFeedScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen'

const MainScreen = createStackNavigator({
    HomeScreen:{screen: HomeScreen},
    ProfileScreen: {screen: ProfileScreen},
    SettingScreen: {screen: SettingScreen},
    NotificationScreen: {screen:NotificationScreen},
    NewsFeedScreen: {screen: NewsFeedScreen, navigationOptions: ({navigation})=> ({
        title: "NewsFeed",
        headerStyle:{backgroundColor: '#8B0000'},
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'

        },
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
    })},
    
}); 

export default MainScreen;