import React, { useState } from 'react';
import { HomeTodoScreenComponent } from './HomeTodoScreenComponent';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeTodoScreenContainer = () => {
    const { todos } = useSelector((state) => state.TodoReducer);
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [searchStartFlag, setSearchStartFlag] = useState(false);

    const searchNote = (text) => {
        setSearch(text);
        if (text.length > 2) {
            setSearchStartFlag(true);
        } else {
            setSearchStartFlag(false);
        }
    };

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <HomeTodoScreenComponent
            todos={todos}
            navigation={navigation}
            valueInput={search}
            onChangeText={searchNote}
            filteredTodos={filteredTodos}
            searchStartFlag={searchStartFlag}
        />
    );
};

export { HomeTodoScreenContainer };
