import React, {useEffect} from "react";
import {StyleSheet, Text, View, FlatList, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";
import {setScreenQuotes} from "../store/actions/setScreenQuotes";



export const QuotesScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const timerId = setInterval(() => dispatch(loadQuotes()), 5000)
    }, [dispatch])

    const allQuotes = useSelector(state => state.quotes.quotes)

    const stop = () => {
        clearInterval(timerId);
    }


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