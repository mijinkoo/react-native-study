import { StyleSheet } from "react-native";

// 외부 파일에서 스타일을 작성하고 컴포넌트에서 외부 파일에 정의된 스타일을 이용하는 방법 

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellowgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const textStyles = StyleSheet.create({
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