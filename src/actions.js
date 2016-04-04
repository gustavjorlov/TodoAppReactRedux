export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let nextTodoId = 0;
export const addTodo = (text) => {
    return {type: ADD_TODO, text: text, id: nextTodoId++};
}
export const completeTodo = (index) => {
    return {type: COMPLETE_TODO, index: index};
}
export const setVisibilityFilter = (filter) => {
    return {type: SET_VISIBILITY_FILTER, filter: filter};
}
