import actionTypes from './actionTypes';

const initialState = {
    todos: [],
    count: 0,
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...action.payload, isCompleted: false }],
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id !== action.payload.id) {
                        return item;
                    }
                    return {
                        ...item,
                        title: action.payload.title,
                        text: action.payload.text,
                    };
                }),
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id !== action.payload.id) {
                        return item;
                    }
                    return {
                        ...item,
                        isCompleted: !action.payload.isCompleted,
                    };
                }),
            };
        default:
            return state;
    }
};

export { TodoReducer };
