import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text: text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id: id,
  });
}

export function reloadTodos() {
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS",
      todos: [
        {
          id: 11121314,
          text: "Go Shopping Again",
          complete: false,
        },
        {
          id: 21222324,
          text: "Sleep At The Yard.",
          complete: true,
        },
      ],
    });
  }, 1000);
}
