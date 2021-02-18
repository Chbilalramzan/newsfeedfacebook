import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {getNewsFeed} from '../services/NewsFeed';
import {SafeAreaView} from 'react-native';

const apiURL = 'https://run.mocky.io/v3/8486bb89-c415-4eed-ae7c-4ff4bbd47e50';

const NewsFeedScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        alert(JSON.stringify(json));
        return JSON.stringify(setData(json));
        //   console.log(json)
      })
      .catch((error) => alert(error))
      .finally(setLoading(false));
    }, [])
  // const fetchData = () => {
    
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
        {/* <TouchableOpacity style={styles.buttonContainer} onPress={fetchData}> */}
        {/* <Text style={styles.buttonText}>Log In</Text> */}
        {/* </TouchableOpacity> */}
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/user.png')}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.textViewContainer}>
              <View style={styles.followTextContainer}>
                <Text style={styles.styleUserName}>Name</Text>
                <Text style={styles.separatorDot}>.</Text>
                <Text style={styles.followText}>Follow</Text>
              </View>
              <Text style={styles.styleDate}>Post Time</Text>
            </View>
            <TouchableOpacity>
              <View>
                <Icon name="ellipsis-h" size={20} color="#000000"></Icon>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.postText}>Hello this is my first post</Text>
          <View style={styles.postContainer}></View>
          <View style={styles.cardFooter}>
            <View style={styles.cardFooter1}>
              <Text>likes</Text>
            </View>
            <View style={styles.cardFooter2}>
              <Text>comments</Text>
              <Text>shares</Text>
            </View>
          </View>
          <View style={styles.separatorLine}></View>
          <View style={styles.cardFooter3Buttons}>
            <TouchableOpacity>
              <View style={styles.footerButtonContainer}>
                <Icon
                  name="thumbs-up"
                  size={20}
                  style={styles.styleIcon}></Icon>
                <Text style={styles.footerButtonText}>Like</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.footerButtonContainer}>
                <Icon name="comment" size={20} style={styles.styleIcon}></Icon>
                <Text style={styles.footerButtonText}>Comment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.footerButtonContainer}>
                <Icon name="share" size={20} style={styles.styleIcon}></Icon>
                <Text style={styles.footerButtonText}>Share</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44B5DF',
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
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#ffffff',
    height: 400,
    width: '100%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    height: 50,
    width: '100%',
  },
  textViewContainer: {
    flex: 7,
  },
  followTextContainer: {
    flexDirection: 'row',
  },
  followText: {
    color: '#00008B',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  separatorDot: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  styleUserName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  styleDate: {
    fontSize: 12,
  },
  imageContainer: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  imageStyle: {
    height: 35,
    width: 35,
    alignItems: 'center',
  },
  postText: {fontSize: 14, padding: 8},
  postContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: 250,
  },
  cardFooter: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'space-between',
  },
  cardFooter1: {
    flex: 6,
    padding: 8,
  },
  cardFooter2: {
    padding: 8,
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardFooter3Buttons: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButtonText: {
    opacity: 0.7,
    fontSize: 17,
    fontWeight: 'bold',
  },
  styleIcon: {
    opacity: 0.7,
    paddingRight: 5,
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#708090',
  },
});
export default NewsFeedScreen;
