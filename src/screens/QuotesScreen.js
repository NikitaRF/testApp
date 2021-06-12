import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, Text, View, FlatList, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";
import {setIntervalId} from "../store/actions/setIntervalId";
import {useInterval} from "../useInterval";
import {delay} from "react-native-reanimated/src/reanimated2/animations";


export const QuotesScreen = ({navigation}) => {
    // const [isInterval, setIsInterval] = useState()
    const dispatch = useDispatch()
    const dispatchInterval = useDispatch()


    // useEffect(() => {
    //     const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    //     return timerId
    // }, [])

    // useEffect(() => {
    //     const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    //
    //     return () => clearInterval(timerId);
    // }, []);



    useEffect(
        () => navigation.addListener('focus', () => dispatch(loadQuotes())),
        []
    )

    // useInterval(() => {
    //     dispatch(loadQuotes())
    // }, 5000);


    //
    // useEffect(
    //     () => (
    //         navigation.addListener('blur', () => 1)),
    //     []
    // )



    // const dispatch2 = useDispatch()


    // useEffect(() => {
    //     const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    //     dispatch2(setIntervalId(timerId))
    // }, [])




    useEffect(
        () => {navigation.addListener('focus', () => start())

        },
        []
    )


    const start = () => {
        const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
        dispatchInterval(setIntervalId(timerId))
    }
    //
    // const stop = () => {
    //     console.log(isInterval)
    //     return clearInterval(isInterval)
    // }


    const allQuotes = useSelector(state => state.quotes.quotes)
    //const intervalId = useSelector(state => state.quotes.intervalId)




    return (
        <ScrollView style={styles.wrapper}>



            <FlatList
                data={allQuotes}
                keyExtractor={(Quotes) => Quotes.id.toString()}
                renderItem={({item}) => <Quote Quote={item} /> }
            />

        </ScrollView>
    )

}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        padding: 10,
    },
})