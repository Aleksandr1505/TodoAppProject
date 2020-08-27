import React from 'react';
import { ScrollView } from 'react-native';
import { TodoItem } from '../TodoItem';

const TodoList = ({ todos, navigation }) => {
    return (
        <ScrollView>
            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    id={item.id}
                    isCompleted={item.isCompleted}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    );
};

export { TodoList };
