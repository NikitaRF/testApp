import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.center}>
            <Text>Главная страница</Text>
            <Text>Версия приложения <Text style={styles.version}>1.0</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})