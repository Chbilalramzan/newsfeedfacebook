/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeading}>Login To Trevely</Text>
      <TextInput style={styles.inputField} placeholder="Username" />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
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

export default App;
