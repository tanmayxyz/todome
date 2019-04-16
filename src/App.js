import React, { Component } from 'react';

import './App.css';
import AppBar from './components/AppBar'
import TodoList from './components/TodoList';
import Addtodo from './components/AddTodo';

class App extends Component {
  state ={
    todos : [
      
    ]
  }

  deleteTodo = (id) => {
    const ans = this.state.todos.filter(todo =>{
      return todo.id !== id;
    })
    console.log(id);
    this.setState({
      todos : ans
    })
  }

  Addtodofunc = (ele) =>{
    console.log(ele)
    let ans ={};
    ans.id = Math.random();
    ans.work = ele;
    const me = [...this.state.todos,ans];
    console.log(ans);
    this.setState({
      todos : me
    })
  }
  render() {
    return (
      <div className="App">
        <AppBar  />
        <Addtodo Addtodofunc={this.Addtodofunc} />
        <TodoList todos ={this.state.todos} deleteTodo={this.deleteTodo}/>
        
        
      </div>
    );
  }
}

export default App;
