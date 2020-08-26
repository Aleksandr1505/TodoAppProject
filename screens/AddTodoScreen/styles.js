import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    valueTitle: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
    },
    valueText: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    buttonAdd: {
        textTransform: 'uppercase',
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B7D4FF',
        padding: 16,
        borderRadius: 50,
        fontWeight: 'bold',
    },
    buttonAddText: {
        fontWeight: 'bold',
    },
    containerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textError: {
        marginTop: 10,
        color: 'red',
        fontWeight: 'bold',
    },
});
