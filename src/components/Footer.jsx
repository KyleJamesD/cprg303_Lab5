import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';


function Footer () {
  return (

      <View style={styles.container}>
        <Text>All Rights Reserved</Text>
        <Text>Kyle Dyck</Text>
        <Text>2024</Text>

      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});

export default Footer;