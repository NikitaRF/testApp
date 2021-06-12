import React from "react";
import {StyleSheet, View, ActivityIndicator} from 'react-native'


export const AppLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator size='large' color='grey'/>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})