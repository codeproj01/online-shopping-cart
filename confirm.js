import React from "react";
import Confirm  from "./Confirm";
import Modal  from "./Modal";

var confirm = function(message, options) {
    var cleanup, component, props, wrapper;
    if (options == null) {
      options = {};
    }
    props = $.extend({
      message: message
    }, options);
    wrapper = document.body.appendChild(document.createElement('div'));
    component = React.render(<Confirm {...props}/>, wrapper);
    cleanup = function() {
      React.unmountComponentAtNode(wrapper);
      return setTimeout(function() {
        return wrapper.remove();
      });
    };
    return component.promise.always(cleanup).promise();
  };

  export default confirm;