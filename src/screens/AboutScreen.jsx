import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Button } from 'react-native';


import MainLayout from '../layouts/MainLayout';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function AboutScreen({navigation}) {



  //const month = today.getMonth()+1;
//const year = today.getFullYear();
//const date = today. getDate();
//const currentDate = month + "/" + date + "/" + year;

  const newdate = new Date();
  const today =  newdate.getDate() + "/" + newdate.getMonth()  + "/" + newdate.getFullYear();


  return (
    <MainLayout>

    <Text style={styles.hellostyle}>About Page</Text>
    <Text style={styles.hellostyle}>Lab 5</Text>
    <Text style={styles.name}>Kyle Dyck</Text>

    <Text>Todays Date is:{today}</Text>


    <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  hellostyle : {
    fontSize: 50,
    fontWeight: '600',
    color: "purple",
    fontStyle : 'italic',
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    color: "purple",
    fontStyle : 'italic',

  },
  date: {

  }

});

export default AboutScreen;