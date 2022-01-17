import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "layout component name", title: "Welcome" };
  }
  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <h1>{this.state.name}</h1>
        <Footer />
      </div>
    );
  }
}
