import 'react-native-gesture-handler';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Users from '../../models/user';
import {AuthContext} from '../../components/context';

const LogInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
      <Text style={styles.pageHeading}>Login To Trevely</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Username"
        autoCapitalize={'none'}
        onChangeText={(val) => textInputChange(val)}
        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
      />
      {data.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Username must be 4 characters long.
          </Text>
        </Animatable.View>
      )}
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
        autoCapitalize={'none'}
        onChangeText={(val) => handlePasswordChange(val)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => loginHandle(data.username, data.password)}>
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
export default LogInScreen;
