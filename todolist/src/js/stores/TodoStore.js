import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 12345,
        text: "Go Shopping",
        complete: false,
      },
      {
        id: 678910,
        text: "Pay Bills",
        complete: false,
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id: id,
      text: text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
