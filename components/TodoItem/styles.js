import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteTitle: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#0000ff',
        fontWeight: 'bold',
        marginBottom: 6,
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#800000',
    },
    textComplete: {
        textDecorationLine: 'line-through',
    },
});
