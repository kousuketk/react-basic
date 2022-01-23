import { createStore } from "redux";

const reducer = () => {
  console.log("reducer has been called.");
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC" });
