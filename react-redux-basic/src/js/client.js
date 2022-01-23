import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state.name = action.payload;
    case "CHANGE_AGE":
      state.age = action.payload;
  }
  return state;
};

const tweetsReducer = (state = {}, action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Tsutomu" });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });
