import React from 'react';
import { useState } from 'react';
import { Switch } from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import { viewStyles, textStyles } from './styles';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import { theme } from './theme';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch}/>
                <Button title="Gummy"/>
                <Button title="Bear"/>
                <Input borderColor="#3498db"/>
                <Input borderColor="#9b59b6"/>
            </Container>
        </ThemeProvider>
        
    );
};


export default App;