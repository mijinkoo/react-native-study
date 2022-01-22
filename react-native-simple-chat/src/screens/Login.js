import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Image, Input, Button } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.background };
padding: 0 20px;
padding-top: ${({ insets: { top } }) => top}px;
padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText };
`;

const Login = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const passwordRef = useRef();

    useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEmailChange = email => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        );
    };

    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    }

    const _handleLoginButtonPress = () => {};

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
        >
            <Container insets={insets}>
                <Image url={images.logo} imageStyle={{borderRadius: 8}}/>
                <Input 
                    label='Email'
                    value={email}
                    onChangeText={_handleEmailChange}
                    onChangeText={text => setEmail(text)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder='Email'
                    returnKeyType='next'
                />
                <Input
                    ref={passwordRef}
                    label='Password'
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={_handleLoginButtonPress}
                    placeholder='Password'
                    returnKeyType='done'
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button 
                    title="Login" 
                    onPress={_handleLoginButtonPress}
                    disabled={disabled}    
                />
                <Button 
                    title="Sign up with email" 
                    onPress={() => navigation.navigate('Signup')}
                    isFilled={false} />
                <Text style={{fontSize: 30}}>Login Screen</Text>
            </Container>
        </KeyboardAwareScrollView>
        
    );
};

export default Login;