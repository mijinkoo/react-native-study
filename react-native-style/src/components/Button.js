import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 이용해서 버튼 컴포넌트 만들기
// 스타일드 컴포넌트는 스타일을 적용한 컴포넌트를 만들 수 있음 (너무 당연한 소리 같지만...)

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props =>
        props.title === 'Gummy' ? props.theme.purple : props.theme.blue };
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: white;
`;

const Button = props => {
    return (
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );  
};

export default Button;