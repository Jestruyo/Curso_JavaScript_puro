import html from './app.html?raw';
import  todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

// Objeto de elementos a usar
const elementIDs = {
    TodoList: '.todo-list',
    NewTodoImput: '#new-todo-input',
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


    // Referencias a elementos HTML
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoImput);

    // Listener
    newDescriptionInput.addEventListener('keyup', (event) => {
        console.log(event);
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;
        todoStore.addTodo(event.target.value,);
        DisplayTodos();
        event.target.value = '';
        
    });
}