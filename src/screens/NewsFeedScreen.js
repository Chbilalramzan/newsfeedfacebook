import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {getNewsFeed} from '../services/NewsFeed';

const apiURL = 'https://run.mocky.io/v3/8486bb89-c415-4eed-ae7c-4ff4bbd47e50';

const NewsFeedScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = () => {
    fetch(apiURL)
      .then((response) => response.json()).then((json) => {
        alert(JSON.stringify(json))
        //   console.log(json)
      }).catch((error) => alert(error)).finally(setLoading(false));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
      <TouchableOpacity style={styles.buttonContainer} onPress={fetchData}>
      <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text {...item.id} />
         )}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44B5DF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputField: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '50%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#2D3D56',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});
export default NewsFeedScreen;
