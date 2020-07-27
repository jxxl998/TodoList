import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });

  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };


  handleItemDelete(index) {
    console.log("index is: " + index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };

  render() {
    return (
      <div className="TodoList">
        <input value={this.state.inputValue} type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={() => this.handleItemDelete(index)}>{item}</li>
              return (
                <TodoItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={() => this.handleItemDelete(index)}
                />);
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;



