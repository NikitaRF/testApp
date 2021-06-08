import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import store from './src/store';

import {HomeScreen} from "./src/screens/HomeScreen";
import {QuotesScreen} from "./src/screens/QuotesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <Provider store={store}>
          <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Главная" component={HomeScreen} />
                <Tab.Screen name="Котировки" component={QuotesScreen} />
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
