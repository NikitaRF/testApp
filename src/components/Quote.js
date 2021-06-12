import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Quote = ({Quote}) => {
    return (

            <View style={styles.wrapper}>
                <View style={styles.head}>
                    <Text style={styles.headText}>{Quote.name}</Text>
                </View>
                <View>
                    <Text style={styles.bottomTextUp}>Last</Text>
                    <Text style={styles.bottomTextDown}>{Quote.last}</Text>
                </View>
                <View>
                    <Text style={styles.bottomTextUp}>PercentChange</Text>
                    <Text style={styles.bottomTextDown}>{Quote.percentChange}</Text>
                </View>
                <View>
                    <Text style={styles.bottomTextUp}>HighestBid</Text>
                    <Text style={styles.bottomTextDown}>{Quote.highestBid}</Text>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,

    },
    head: {
        width: "100%",
        paddingBottom: 10,
    },
    headText: {
        fontFamily: 'roboto-bold',
    },
    bottomTextUp: {
        fontFamily: 'roboto-regular',
        color: 'grey',

    },
    bottomTextDown: {
        fontFamily: 'roboto-regular',

    }
})