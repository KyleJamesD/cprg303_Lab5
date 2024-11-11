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



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
    </NavigationContainer>
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

export default App;
