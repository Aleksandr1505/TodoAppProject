import actionTypes from './actionTypes';

export default {
    addTodo: (title, text, id, isCompleted) => (dispatch) => {
        dispatch({ type: actionTypes.ADD_TODO, payload: { title, text, id, isCompleted } });
    },
    editTodo: (id, title, text) => (dispatch) => {
        dispatch({ type: actionTypes.EDIT_TODO, payload: { id, title, text } });
    },

    deleteTodo: (id) => (dispatch) => {
        dispatch({ type: actionTypes.REMOVE_TODO, payload: { id } });
    },

    completeTodo: (id) => (dispatch) => {
        dispatch({ type: actionTypes.COMPLETE_TODO, payload: { id } });
    },
};
