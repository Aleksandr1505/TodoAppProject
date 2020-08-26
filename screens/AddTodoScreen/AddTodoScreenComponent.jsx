import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const AddTodoScreenComponent = ({ valueTitle, valueText, onChangeTitle, onChangeText, error, onSaveHandler }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={valueTitle}
                onChangeText={onChangeTitle}
                placeholder="Note's Title"
                placeholderTextColor="grey"
                maxLength={30}
                autoFocus
                style={styles.valueTitle}
            />
            <TextInput
                value={valueText}
                onChangeText={onChangeText}
                placeholder="Note's Text"
                placeholderTextColor="grey"
                style={styles.valueText}
            />
            <View style={styles.containerView}>
                <TouchableOpacity style={styles.buttonAdd} onPress={() => !error && onSaveHandler()}>
                    <Text style={styles.buttonAddText}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerView}>
                <Text style={styles.textError}>{error}</Text>
            </View>
        </View>
    );
};

export { AddTodoScreenComponent };
