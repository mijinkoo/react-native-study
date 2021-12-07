import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { viewStyles, textStyles } from './styles';

// 스타일링은 1) style 속성을 이용해서 <인라인 스타일>을 적용하는 방식과
//           2) StyleSheet에 정의된 스타일을 사용하는 방법 <클래스 스타일>
const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'skyblue',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    padding: 10,
                    fontSize: 26,
                    fontWeight: '900', // 글자가 두꺼운 정도가 달라짐 클수록 강조 표시
                    color: 'black',
                }}
            >
                Inline styling - Text
            </Text>
            <Text
                style={{
                    padding: 10,
                    fontSize: 26,
                    fontWeight: '400',
                    color: 'red',
                }}
            >
                Inline styling - Error
            </Text>
            <View style={styles.container}>
                    <Text style={styles.text}>
                        Class styling - Text
                    </Text>
                    <Text style={styles.error}>
                        Class styling - Error
                    </Text>
            </View>
            <View style={viewStyles.container}>
                <Text style={[textStyles.text, {color: 'purple'}]}>
                    외부에서 스타일 정의하기
                </Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black',
    },
    error: {
        padding: 10,
        fontSize: 26,
        fontWeight: '400',
        color: 'red',
    },
});

export default App;