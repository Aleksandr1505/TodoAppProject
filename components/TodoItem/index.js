import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const TodoItem = ({ navigation, id, title, text, isCompleted }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Todo', { id, title, isCompleted, text })}>
                <View style={styles.note}>
                    <Text style={[styles.noteTitle, isCompleted && styles.textComplete]}>{title}</Text>
                    <Text style={styles.noteText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export { TodoItem };
