import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import Controls from './Controls';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items : ['Edit this item to get started!']};
  }

  handleChange = (event) => { //to handle typing in the text boxes
    const oldState = this.state.items;
    oldState.splice(event.target.id, 1, event.target.value);
    this.setState({items: oldState});
  }

  addItem = () => {
    this.setState({
      items: [
        ...this.state.items.slice(),
        'New Item'
      ]
    });
  }

  removeItem = (event) => {
    const oldState = this.state.items;
    oldState.splice(event.target.id, 1);
    this.setState({items: oldState});
  }


  render() {
    return (
      <div className="app">
        <List items={this.state.items} handleChange={this.handleChange} removeItem={this.removeItem}/>
        <Controls addItem={this.addItem}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
