import {connect} from 'react-redux';
import {completeTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:

    }
}

const mapStateToProps = (state) => {
    const todos = getVisibleTodos(state.todos, state.visibilityFilter);
    return {
        todos: todos,
        count: todos.length
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(completeTodo(id));
        },
        onTodoHover: (text) => {
            console.log(`onTodoHover ${text}`);
        }
    };
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
