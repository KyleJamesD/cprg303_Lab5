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

import { useState } from 'react';

import MainLayout from '../layouts/MainLayout';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  const [tasks, settasks] = useState(['Do laundry','Go to gym','Walk dog']);

  const addTask = (task) => {
    const newtasks = [...tasks,task];
    settasks(newtasks);
    
  };

  return (
    <MainLayout>
    <Text style={styles.hellostyle}>Home Page</Text>

    
    <ToDoList tasks={tasks}></ToDoList>
    <ToDoForm addTask={addTask}></ToDoForm>

    <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
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
  }

});

export default HomeScreen;