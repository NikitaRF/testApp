import React from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";

export const Quote = ({Quote}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View>
                <Text>{Quote.id}</Text>
            </View>
        </TouchableOpacity>
    )
}