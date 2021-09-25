import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = props => {
  return (
    <CSSTransition 
        mountOnEnter      // To play animation
        unmountOnExit     // to exit animation
        in={props.show} 
        timeout={animationTiming}
        classNames={{
          enter: '',
          enterActive: 'ModalOpen',
          exit: '',
          exitActive: 'ModalClosed'
        }}
    >
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        
    </CSSTransition>
  );
};

export default modal;