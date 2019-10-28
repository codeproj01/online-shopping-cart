<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

var Modal = window.ReactModalBootstrap.Modal;
var ModalHeader = window.ReactModalBootstrap.ModalHeader;
var ModalTitle = window.ReactModalBootstrap.ModalTitle;
var ModalClose = window.ReactModalBootstrap.ModalClose;
var ModalBody = window.ReactModalBootstrap.ModalBody;
var ModalFooter = window.ReactModalBootstrap.ModalFooter;



class App extends React.Component {
  state = {
    isOpen: false,
    isSubOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  openSubModal = () => {
    this.setState({
      isSubOpen: true
    });
  };

  hideSubModal = () => {
    this.setState({
      isSubOpen: false
    });
  };

  render() {
    let subModalDialogStyles = {
      base: {
        bottom: -600,
        transition: 'bottom 0.4s'
      },
      open: {
        bottom: 0
      }
    };
    return (
      <div className='layout-page'>
        <main className='layout-main'>
          <div className='container'>
            <button className='btn btn-primary' onClick={this.openModal}>
              Open Modal
            </button>

            <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Modal title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <button className='btn btn-primary' onClick={this.openSubModal}>
                  Open Sub Modal
                </button>
                <hr/>


                <Modal isOpen={this.state.isSubOpen} onRequestHide={this.hideSubModal} dialogStyles={subModalDialogStyles}>
                  <ModalHeader>
                    <ModalClose onClick={this.hideSubModal}/>
                    <ModalTitle>Sub Modal title</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    
                  </ModalBody>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                  Close
                </button>
                <button className='btn btn-primary'>
                  Save changes
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </main>
      </div>
    );
  }
}

function run() {
  ReactDOM.render( < App / > , document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
=======
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
>>>>>>> ebbf5e8f3cc83826223ce5640bc20303d6965906
