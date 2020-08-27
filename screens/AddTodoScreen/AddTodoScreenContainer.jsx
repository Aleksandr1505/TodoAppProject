import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTodoScreenComponent } from './AddTodoScreenComponent';
import { useThunkDispatch } from '../../reduxStore/store';
import todoActions from '../../reduxStore/createTodo/actions';
import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';

const AddTodoScreenContainer = () => {
    const { todos } = useSelector((state) => state.TodoReducer);
    const navigation = useNavigation();
    const dispatch = useThunkDispatch();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState();

    const onChangeTitle = (changedTitle) => {
        setTitle(changedTitle);
        const isTitleExist = todos.some((item) => item.title === changedTitle);
        if (isTitleExist) {
            setError('This title is already used.');
        } else {
            setError('');
        }
    };

    const onChangeText = (changedText) => {
        setText(changedText);
    };

    const onSaveHandler = () => {
        setError('');
        navigation.goBack();
        dispatch(todoActions.addTodo(title, text, shortid.generate()));
    };

    return (
        <AddTodoScreenComponent
            valueTitle={title}
            valueText={text}
            onChangeTitle={onChangeTitle}
            onChangeText={onChangeText}
            error={error}
            onSaveHandler={onSaveHandler}
        />
    );
};

export { AddTodoScreenContainer };
