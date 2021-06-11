import React from "react";
import {ImageBackground, Text, TouchableOpacity, View, StyleSheet} from "react-native";

export const Quote = ({Quote}) => {
    return (

            <View style={styles.wrapper}>
                <Text>{Quote.name}</Text>
                <View>
                    <Text>Last</Text>
                    <Text>{Quote.last}</Text>
                </View>
                <View>
                    <Text>PercentChange</Text>
                    <Text>{Quote.percentChange}</Text>
                </View>
                <View>
                    <Text>HighestBid</Text>
                    <Text>{Quote.highestBid}</Text>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'gray',
        marginBottom: 10,
    }
})