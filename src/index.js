import React from 'react';
import ReactDOM from 'react-dom';
import TodoItems from "./TodoItems";
import './index.css';
import ConfirmWindow from './confirm';



class App extends React.Component {

constructor(props) {
super(props); 
this.state = {
  items: [],
  currentKey:[],
  btnID:[]
};
this.addItem = this.addItem.bind(this);
this.deleteItem = this.deleteItem.bind(this);
this.itemChecker = this.itemChecker.bind(this);
this.confAns = this.confAns.bind(this);
this.yesOrNo = this.yesOrNo.bind(this);
  };//PROPS END

  confAns(key) {
    let confwindow = document.getElementById('confDiv')
    confwindow.style.visibility = "visible"
    let currentKey = this.state.currentKey
    currentKey.value = key
    this.setState({currentKey}) 
  };

  yesOrNo (e) {
    let confwindow = document.getElementById('confDiv')
    confwindow.style.visibility = "hidden"
    let id = e
    let btnID = this.state.btnID
    btnID.value = id
    this.setState({btnID}, () => {this.deleteItem()})
  };

  addItem(e) { // adding items to state for display
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      },() => {this.itemChecker()}); // callback for chech actual state
      this._inputElement.value = "";
      e.preventDefault();
    };

    deleteItem() { // deleting items function
      let key = this.state.currentKey.value
      let yesOrNo = this.state.btnID.value
      let filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
         });
      if (yesOrNo === 'yes') {
          this.setState({ 
           items: filteredItems
          }, () => {this.itemChecker()});
        }
    };


    itemChecker () { // setting display of empty list message
      let infoDiv = document.getElementById('info')
      let status = this.state.items
      if (status.length > 0 ) {
        infoDiv.style.opacity = '0'
      } else {
        infoDiv.style.opacity = '1'
      }
    }

render() {
  return (
  <div>
<TodoItems 
    entries={this.state.items}
    delete={this.deleteItem}
    confirm={this.confAns}
    />
  <div className="todoListMain">
    <div className="header">
      <form onSubmit={this.addItem}>
         <input ref={(a) => this._inputElement = a} placeholder="enter task">
         </input>
         <button id="sbmbutton" type="submit">add</button>
      </form>
    </div>
    <div id="info">no tasks to do....</div>
  </div>
  <ConfirmWindow
  yesOrNo={this.yesOrNo}
  />
  </div>   
)
  }//end of render
}//end of APP

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
