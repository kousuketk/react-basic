import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };
    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="row">
            <p>this is footer</p>
          </div>
        </div>
      </footer>
    );
  }
}
