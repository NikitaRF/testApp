import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, Text, View, FlatList, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";
import {useInterval} from "../useInterval";



export const QuotesScreen = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(
        () => navigation.addListener('focus', () => dispatch(loadQuotes())),
        []
    )

    useInterval(() => dispatch(loadQuotes()), 5000, navigation)

    const allQuotes = useSelector(state => state.quotes.quotes)

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