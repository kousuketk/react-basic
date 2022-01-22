import { EventEmitter } from "events";

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
}

const todoStore = new TodoStore();

export default todoStore;
