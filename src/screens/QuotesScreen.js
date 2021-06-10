import React, {useEffect} from "react";
import {StyleSheet, Text, View, FlatList, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";
import {Quote} from "../components/Quote";



export const QuotesScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadQuotes())
    }, [dispatch])

    const allQuotes = useSelector(state => state.quotes.quotes)


    return (
        <View style={styles.wrapper}>
            <Text>{1}</Text>
            <FlatList
                data={allQuotes}
                keyExtractor={(Quotes) => Quotes.id.toString()}
                renderItem={({item}) => <Quote Quote={item} /> }
            />

        </View>
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