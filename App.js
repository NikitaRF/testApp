import React, {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import store from './src/store';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import {HomeScreen} from "./src/screens/HomeScreen";
import {QuotesScreen} from "./src/screens/QuotesScreen";

const Tab = createBottomTabNavigator();


async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}


export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <NavigationContainer>
                <AppLoading
                    startAsync={loadApplication}
                    onError={err => console.log(err)}
                    onFinish={() => setIsReady(true)}
                />
            </NavigationContainer>

        )
    } else {

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



}
