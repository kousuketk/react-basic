import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "layout component name", title: "Welcome" };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "name changed" });
    }, 1000);
    setTimeout(() => {
      this.setState({ title: "Welcome message has changed" });
    }, 2000);
    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"thank you!"} />
        <h1>{this.state.name}</h1>
        <Footer />
      </div>
    );
  }
}
