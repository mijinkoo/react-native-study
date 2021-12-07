import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';

const App = () => {
    return (
        <View style={viewStyles.container}>
            <Header/>
            <Contents/>
            <Footer/>
        </View>
    );
};


export default App;