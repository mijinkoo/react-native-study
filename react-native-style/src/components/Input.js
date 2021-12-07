import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌트에서 attrs를 사용해서 컴포넌트 속성 설정하기
const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: 'Enter a text...',
    placeholderTextColor: props.borderColor,
}))`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
    border: 2px;
    border-color: ${props => props.borderColor };
    font-size: 24px;
`;

const Input = props => {
    return (
        <StyledInput borderColor={props.borderColor} />
    );
};

export default Input;