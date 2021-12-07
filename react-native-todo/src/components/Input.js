import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${({width}) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px; 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur, }) => {

    const width = Dimensions.get('window').width;

    return (
        <StyledInput 
            width={width} 
            placeholder={placeholder} 
            maxLength={50}
            autoCapitalize="none" // 자동으로 대문자 전환하지 않도록
            autoCorrect={false}   // 자동 수정 기능 비활성화
            returnKeyType="done"  // 키보드의 완료 버튼 설정 => 근데 이거 한글로 완료라고 나옴
            value={value}         // TextInput에 표시할 값
            onChangeText={onChangeText}       // TextInput의 텍스트가 변경될 때 호출되는 콜백
            onSubmitEditing={onSubmitEditing} // TextInput의 제출 버튼을 인수와 함께 누르면 호출되는 콜백
            onBlur={onBlur}
        />
    );
};

Input.propTypes = {
    // props로 전달되는 값들을 설정
    // PropTypes로 전달되는 값들의 타입과 필수 여부 지정
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default Input;