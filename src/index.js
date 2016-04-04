import {createStore} from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

store.dispatch({ type: 'ADD_TODO', text: 'Read the Redux docs.' });
