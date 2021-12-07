import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { images } from '../images';

// 아이콘의 색은 입력되는 텍스트와 동일한 색을 사용하도록 스타일 적용
const Icon = styled.Image`
    tint-color: ${({theme, completed}) => 
        completed ? theme.done : theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

// IconButton을 호출할 때 원하는 이미지의 종류를 props에 type으로 전달하도록 작성
const IconButton = ({ type, onPressOut, id, completed}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} completed={completed}/>
        </TouchableOpacity>
    );
};

// props로 onPressOut이 전달되지 않았을 경우에도 문제가 발생하지 않도록 기본갑 지정
IconButton.defaultProps = {
    onPressOut: () => {},
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed: PropTypes.bool,
};

export default IconButton;