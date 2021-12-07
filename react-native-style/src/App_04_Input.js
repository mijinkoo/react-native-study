import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { viewStyles, textStyles } from './styles';
import styled from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <Container>
            <Button title="Gummy"/>
            <Button title="Bear"/>
            <Input borderColor="#3498db"/>
            <Input borderColor="#9b59b6"/>
        </Container>
    );
};


export default App;