import { createStore } from "redux";

const reducer = () => {
  console.log("reducer has been called.");
};

const store = createStore(reducer, 1);
