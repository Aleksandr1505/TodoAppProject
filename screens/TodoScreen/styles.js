import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    todoInformation: {
        margin: 6,
    },
    editValueTitle: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
    },
    editValueText: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    textError: {
        color: 'red',
        fontWeight: 'bold',
    },
    buttonMarkAsCompleted: {
        minWidth: 100,
        margin: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    textComplete: {
        textDecorationLine: 'line-through',
    },
    containerButton: {
        margin: 6,
    },
    containerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deletedNote: {
        marginTop: 10,
        color: 'green',
        fontWeight: 'bold',
    },
});
