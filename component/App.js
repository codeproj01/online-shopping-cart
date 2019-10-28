import React from "react";
import ReactDOM from "react-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class App extends React.Component {
  submit() {
    confirmAlert({
      title: "Cancel",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => window.location.href = "/"
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    return <button type="button" class="btn btn-danger" onClick={this.submit}>Cancel</button>;
  }
}

const rootElement = document.getElementById("cancel-button");
ReactDOM.render(<App />, rootElement);
