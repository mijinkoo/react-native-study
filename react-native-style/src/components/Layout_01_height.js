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
        <View styles={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'lightpink'
    },
    contents: {
        backgroundColor: 'lightyellow',
        height: 640,
    },
    footer: {
        backgroundColor: 'lightpurple'
    },
    text: {
        fontSize: 26,
    },
});