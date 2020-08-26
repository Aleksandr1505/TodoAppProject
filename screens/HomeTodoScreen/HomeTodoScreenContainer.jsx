import React, { useState } from 'react';
import { HomeTodoScreenComponent } from './HomeTodoScreenComponent';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeTodoScreenContainer = () => {
    const { todos } = useSelector((state) => state.TodoReducer);
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [searchInputEmpty, setSearchInputEmpty] = useState(false);

    const searchNote = (text) => {
        setSearch(text);
        if (text.length > 2) {
            setSearchInputEmpty(true);
        } else {
            setSearchInputEmpty(false);
        }
    };

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
        <HomeTodoScreenComponent
            todos={todos}
            navigation={navigation}
            valueInput={search}
            onChangeText={searchNote}
            filteredTodos={filteredTodos}
            searchInputEmpty={searchInputEmpty}
        />
    );
};

export { HomeTodoScreenContainer };
