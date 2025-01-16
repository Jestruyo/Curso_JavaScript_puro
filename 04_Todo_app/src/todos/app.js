import html from './app.html?raw';
import  todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

// Objeto de elementos a usar
const elementIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {

    // Display de elemento
    const DisplayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(elementIDs.TodoList, todos);
    }

    // Cuando la funcion App() se llama
    (() => {
        const app = document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        DisplayTodos();
    })();

}