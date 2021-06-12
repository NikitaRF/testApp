import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, Text, View, FlatList, Button, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";
import {useInterval} from "../useInterval";
import {AppLoader} from "../ui/AppLoader";


export const QuotesScreen = ({navigation}) => {

    const isLoading = useSelector(state => state.quotes.loading)
    console.log("Состояние загрузки", isLoading)



    const dispatch = useDispatch()

    useEffect(
        () => navigation.addListener('focus', () => dispatch(loadQuotes())),
        []
    )

    useInterval(() => dispatch(loadQuotes()), 5000, navigation)

    const allQuotes = useSelector(state => state.quotes.quotes)

    if (allQuotes === 'error'  ) {
        return (
            <ScrollView style={styles.wrapper}>

                <View style={styles.dontLoadWrap}>
                    <Text style={styles.dontLoadText}>Что-то пошло не так, повторите позже</Text>
                </View>

                <FlatList
                    data={allQuotes}
                    keyExtractor={(Quotes) => Quotes.id.toString()}
                    renderItem={({item}) => <Quote Quote={item} /> }
                />

            </ScrollView>
        )
    }

    if (isLoading) {
        return <AppLoader />
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
    dontLoadText: {
        color: 'red',
        fontFamily: 'roboto-regular',
    },
    dontLoadWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})