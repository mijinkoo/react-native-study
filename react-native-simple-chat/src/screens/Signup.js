import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Image, Input, Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
    padding: 0 20px;
`;

const ErrorText = styled.Text`
    alignt-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.ErrorText};
`;

const Signup = () => {
    return (
        <Container>
            <Text style={{fontSize: 30}}>Signup Screen</Text>
        </Container>
    );
};

export default Signup;