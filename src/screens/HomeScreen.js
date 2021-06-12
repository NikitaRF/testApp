import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";




export const HomeScreen = ({navigation}) => {

    const intervalId = useSelector(state => state.quotes.intervalId)
    console.log("intervalId", intervalId)
    clearInterval(intervalId)

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