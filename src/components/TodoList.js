import React, {PropTypes} from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, onTodoHover, count}) => (
    <div>
        <h2>{count} todos:</h2>
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                    onMouseEnter={() => onTodoHover(todo.text)} />
            )}
        </ul>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
