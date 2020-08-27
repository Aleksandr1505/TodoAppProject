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
        <View key={idItem} style={styles.container}>
            {edit ? (
                <View>
                    <TextInput style={styles.editValueTitle} value={editTitle} onChangeText={onChangeTitle} autoFocus />
                    <TextInput style={styles.editValueText} value={editText} onChangeText={onChangeText} />
                    <View style={styles.containerButton}>
                        <Button style={styles.button} title="Save" onPress={() => editNote()} disabled={disabled} />
                    </View>
                    <View style={styles.containerView}>
                        <Text style={styles.textError}>{error}</Text>
                    </View>
                </View>
            ) : (
                <View>
                    {deleted ? (
                        <View style={styles.containerView}>
                            <Text style={styles.deletedNote}>Note was successfully deleted</Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={[styles.todoInformation, isCompleted && styles.textComplete]}>
                                Title: {editTitle}
                            </Text>
                            <Text style={styles.todoInformation}>Text: {editText}</Text>
                            <View style={styles.containerButton}>
                                <Button onPress={() => setEdit(!edit)} title="Edit" />
                            </View>
                            <View style={styles.containerButton}>
                                <Button title="Delete" onPress={() => deleteNote()} />
                            </View>
                            <TouchableOpacity style={styles.buttonMarkAsCompleted} onPress={changeStatusIsCompleted}>
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
