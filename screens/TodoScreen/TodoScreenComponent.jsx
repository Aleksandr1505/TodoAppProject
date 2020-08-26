import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const TodoScreenComponent = ({
    idItem,
    editTitle,
    editText,
    edit,
    setEdit,
    editNote,
    deleteNote,
    deleted,
    changeStatusIsCompleted,
    onChangeTitle,
    onChangeText,
    isCompleted,
    error,
    disabled,
}) => {
    return (
        <View key={idItem}>
            {edit ? (
                <View>
                    <TextInput value={editTitle} onChangeText={onChangeTitle} autoFocus />
                    <TextInput value={editText} onChangeText={onChangeText} />
                    <Button title="Save" onPress={() => editNote()} disabled={disabled} />
                    <Text style={styles.textError}>{error}</Text>
                </View>
            ) : (
                <View>
                    {deleted ? (
                        <View>
                            <Text>Note was deleted</Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={isCompleted && styles.textComplete}>{editTitle}</Text>
                            <Text>{editText}</Text>
                            <Button onPress={() => setEdit(!edit)} title="Edit" />
                            <Button title="Delete" onPress={() => deleteNote()} />
                            <TouchableOpacity style={styles.button} onPress={changeStatusIsCompleted}>
                                <Text style={styles.buttonText}>
                                    {isCompleted ? 'Return Uncompleted Status' : 'Mark as Completed'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};

export { TodoScreenComponent };
