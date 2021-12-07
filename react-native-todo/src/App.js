import React, {useState} from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import { theme } from './theme';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './images';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppLoading} from 'expo'; // 특정 조건에서 로딩 화면이 유지되도록 하는 기능
// 렌더링하기 전에 처리해야 하는 작업을 수행하는 데 유용
// AppLoading 컴포넌트를 사용해서 첫 화면이 렌더링되기 전에 _loadTask 함수가 호출되도록

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

// 스타일드 컴포넌트 이용해서 Title 컴포넌트 만들기
const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme}) => theme.main};
    align-self: flex-start;
    margin: 0px 20px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`;

export default function App() {
    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({ }); // useState 변수 tasks로 할 일 목록을 저장하고 관리
    
    // 데이터 저장하기
    const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
        } catch(e) {
            console.error(e);
        }
    };

    // 데이터 불러오기
    const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || '{}'));
        // 항목을 저장할 때 사용했던 키와 동일한 키로 데이터를 불러오고 객체로 변환하여 tasks에 입력
    };

    const _addTask = () => {
        const ID = Date.now().toString();   // id는 할 일 항목이 추가되는 시간의 타임스탬프를 이용
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},    // 내용을 나타내는 text는 Input 컴포넌트에 입력된 값을 지정
        };  // 새로 추가되는 항목이므로 completed는 항상 false
        alert(`Add: ${newTask}`);
        setNewTask('');     // 추가하고 newTask 및 Input 컴포넌트 초기화
        _saveTasks({...tasks, ...newTaskObject});
    };

    // 삭제 버튼을 눌렀을 때 항목의 id를 이용해서 tasks에서 해당 항목을 삭제
    const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        _saveTasks(currentTasks);
    };

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        _saveTasks(currentTasks);
    };

    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        _saveTasks(currentTasks);
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    // 인풋 컴포넌트에서 수정 중에 포커스를 잃으면 내용이 초기화되도록
    const _onBlur = () => {
        setNewTask('');
    };

    return isReady ? (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content" backgroundColor={theme.background} />
                <Title>TODO List</Title>
                <Input 
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />
                <List width={width}>
                    {/* 최신 항목이 가장 앞에 보이도록 tasks를 역순으로 렌더링되도록 작성*/}
                    {Object.values(tasks).reverse().map(item => (
                        <Task 
                            key={item.id} item={item} 
                            deleteTask={_deleteTask}
                            toggleTask={_toggleTask}
                            updateTask={_updateTask}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    ) : (
        <AppLoading
            startAsync={_loadTasks}
            onFinish={() => setIsReady(true)}
            onError={console.error}
        />
    );
};