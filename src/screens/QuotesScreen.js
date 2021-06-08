import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";





export const QuotesScreen = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(loadQuotes())
    }, [])

    const allQuotes = useSelector(state => state.quotes.quotes)

    return (
        <View style={styles.center}>
            <Text>Котировки</Text>
            {allQuotes.toString()}
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