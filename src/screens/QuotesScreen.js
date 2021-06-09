import React, {useEffect} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loadQuotes} from "../store/actions/loadQuotes";



const Item = ({ id }) => (
    <View>
        <Text >{id}</Text>
    </View>
);


export const QuotesScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadQuotes())
    }, [dispatch])

    const allQuotes = useSelector(state => state.quotes.quotes)
    console.log(allQuotes)


    const renderItem = ({ item }) => <Item title={item.id} />;

    return (
        <View style={styles.center}>
            <Text>Котировки</Text>
            <Text>{1}</Text>
            <FlatList
                data={allQuotes}
                keyExtractor={(quotes) => quotes.id.toString()}
                renderItem={renderItem}
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
})