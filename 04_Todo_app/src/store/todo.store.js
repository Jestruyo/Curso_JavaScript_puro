import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: "all",
    Completed: "completed",
    Pending: "pending",
}

const state = {
    todos: [
        new Todo("Jehova es mi Dios"),
        new Todo("Jesucristo es mi redento"),
        new Todo("Soy una oveja dispuesta a servir"),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log("InitStore");
}

export default {
    initStore,
}