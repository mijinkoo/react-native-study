import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    );
};

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'lightpink'
    },
    contents: {
        flex: 3,
        backgroundColor: 'lightyellow',
    },
    footer: {
        flex: 1,
        backgroundColor: 'purple'
    },
    text: {
        fontSize: 26,
    },
});