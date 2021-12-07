import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { viewStyles, textStyles } from './styles';
import styled from 'styled-components';
import Button from './components/Button';

const Container = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <Container>
            <Button title="Gummy"/>
            <Button title="Bear"/>
        </Container>
    );
};


export default App;