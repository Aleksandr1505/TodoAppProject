import React, { useState } from 'react';
import { TodoScreenComponent } from './TodoScreenComponent';
import { useDispatch, useSelector } from 'react-redux';
import todoActions from '../../reduxStore/createTodo/actions';
import { useNavigation } from '@react-navigation/native';

const TodoScreenContainer = ({ route }) => {
    const { id, isCompleted, title, text } = route.params;
    const { todos } = useSelector((state) => state.TodoReducer);
    const navigation = useNavigation();
    const [error, setError] = useState();
    const [disabled, setDisabled] = useState(false);
    const todo = useSelector((state) => state.TodoReducer.todos.find((item) => id === item.id));
    const [editTitle, setEditTitle] = useState(title);
    const [editText, setEditText] = useState(text);
    const [edit, setEdit] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const dispatch = useDispatch();

    const changedTitleName = (changedNoteTitle) => {
        setEditTitle(changedNoteTitle);
        const existTitle = todos.some((item) => item.title === changedNoteTitle);
        if (existTitle) {
            setError('Note with such name is already exist');
            setDisabled(true);
        } else {
            setError('');
            setDisabled(false);
        }
    };

    const editNote = () => {
        navigation.goBack();
        dispatch(todoActions.editTodo(id, editTitle, editText));
    };

    const deleteNote = () => {
        setDeleted(true);
        dispatch(todoActions.deleteTodo(id));
    };

    const changeStatusIsCompleted = () => {
        dispatch(todoActions.completeTodo(id, todo.isCompleted));
        navigation.setParams({
            isCompleted: !todo.isCompleted,
        });
    };

    return (
        <TodoScreenComponent
            editTitle={editTitle}
            editText={editText}
            edit={edit}
            setEdit={setEdit}
            onChangeTitle={changedTitleName}
            onChangeText={setEditText}
            deleted={deleted}
            isCompleted={isCompleted}
            editNote={editNote}
            deleteNote={deleteNote}
            changeStatusIsCompleted={changeStatusIsCompleted}
            error={error}
            disabled={disabled}
        />
    );
};

export { TodoScreenContainer };
