import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>No Notification</Text>
      </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});