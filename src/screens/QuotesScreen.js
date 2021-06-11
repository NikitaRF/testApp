import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, Text, View, FlatList, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";
import {setIntervalId} from "../store/actions/setIntervalId";


export const QuotesScreen = ({navigation}) => {
    // const [isInterval, setIsInterval] = useState()
    const dispatch = useDispatch()
    // const dispatch2 = useDispatch()


    // useEffect(() => {
    //     const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    //     dispatch2(setIntervalId(timerId))
    // }, [])


    useEffect(
        () => navigation.addListener('focus', () => dispatch(loadQuotes())),
        []
    )

    useEffect(
        () => navigation.addListener('focus', () => start()),
        []
    )

    useEffect(
        () => navigation.addListener('blur', () => stop()),
        []
    )

    const start = () => {
        const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    }

    const stop = () => {
        clearInterval(intervalId)
    }


    const allQuotes = useSelector(state => state.quotes.quotes)
    const intervalId = useSelector(state => state.quotes.intervalId)

    console.log(intervalId)


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