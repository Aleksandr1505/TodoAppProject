import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textError: {
        color: 'red',
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    textComplete: {
        textDecorationLine: 'line-through',
    },
});
