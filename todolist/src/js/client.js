import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";

const app = document.getElementById("app");

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Todos}></Route>
    </Layout>
  </Router>,
  app
);
