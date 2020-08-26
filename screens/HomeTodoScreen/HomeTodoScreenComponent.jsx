import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TodoList } from '../../components/TodoList';
import { SearchBar } from '../../components/SearchBar';
import { styles } from './styles';

const HomeTodoScreenComponent = ({ todos, navigation, valueInput, onChangeText, filteredTodos, searchStartFlag }) => {
    return (
        <View style={styles.container}>
            <SearchBar valueInput={valueInput} onChangeText={onChangeText} />
            {todos.length === 0 ? (
                <View style={styles.textContainer}>
                    <Text>There is no any notes.</Text>
                </View>
            ) : (
                <View>
                    {searchStartFlag ? (
                        <View>
                            {filteredTodos.length === 0 ? (
                                <View>
                                    <Text>There is no such note</Text>
                                </View>
                            ) : (
                                <TodoList todos={filteredTodos} navigation={navigation} />
                            )}
                        </View>
                    ) : (
                        <TodoList todos={todos} navigation={navigation} />
                    )}
                </View>
            )}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Note')}>
                <Text>Add Note</Text>
            </TouchableOpacity>
        </View>
    );
};

export { HomeTodoScreenComponent };
