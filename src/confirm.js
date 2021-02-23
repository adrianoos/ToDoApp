import React from 'react';

class ConfirmWindow extends React.Component { // confirmation windows for deleting operation
    
      yesOrNo(e) { // passing props
        this.props.yesOrNo(e.id);
      }

    render() {
     
      return (
        <div id='confDiv'>Confirm ?
            <div id='yes' onClick={(e) => {this.yesOrNo(e.target)}}>Yes</div>
            <div id='no' onClick={(e) => {this.yesOrNo(e.target)}}>No</div>
        </div>
      );
    }
  };
   
  export default ConfirmWindow;