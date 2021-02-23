import React from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component { // List Items create function
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
      };

      confirm(key) { 
        this.props.confirm(key);
      }
     
    createTasks(item) {
      return <li className="Li" onClick={() => this.confirm(item.key)} key={item.key} data-text="Delete Item...">{item.text}</li>
    }
   
    render() {
      let todoEntries = this.props.entries;
      let listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
            {listItems}
            </FlipMove>
        </ul>
      );
    }
  };
   
  export default TodoItems;