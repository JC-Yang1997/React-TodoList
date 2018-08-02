import React, { Component , Fragment } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ListItem from './components/ListItem';
import CountFilter from './components/CountFilter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {id:1,content:"吃饭",isDone:false},
        {id:2,content:"睡觉",isDone:false},
        {id:3,content:"敲代码",isDone:true}
      ],
      inputValue : '',
      nextId:4
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleAddClick(){
    const {todos,inputValue,nextId} = this.state;
    const newTodos = {
      id:nextId,
      content:inputValue,
      isDone:false
    }
    this.setState({
      todos : [...todos,newTodos],
      nextId : nextId + 1,
      inputValue : ''
    });
  }
  handleChange(e){
    this.setState({
      inputValue : e.target.value
    })
  }
  handleItemClick = (id) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
        return (
          todo.id === id
          ?
          {
            ...todo,
            isDone : !todo.isDone            
          }
          :
          todo
        )
    })
    this.setState({
      todos : newTodos
    })
  }
  handleCount(){
    const notDone = this.state.todos.filter(item => !item.isDone)
    const hasDone = this.state.todos.filter(item => item.isDone)
    const allList = this.state.todos;
    return (
      {
      allList,      
      notDone,
      hasDone
      }
    )
  }
  render() {
    return (
     <Fragment>
       <article className="message is-danger">
        <div className="message-header">
          <div className='container has-text-centered'>Thanks for using this todo-list by React!</div>
        </div>
      </article>
          <div className="add-box">
            <input 
            className="input is-info" 
            type="text" 
            value={this.state.inputValue}
            placeholder="Please enter your todo-things." 
            onChange={this.handleChange} />
            <button 
            className="button is-primary"
            onClick={this.handleAddClick}>
                Add
            </button>
          </div>
      <CountFilter counters={this.handleCount()}/>
      <div className="list-box container">      
      <article className="message is-warning box-left">
        <div className="message-header header">
          <p>未完成事项</p>
        </div>
        <div className="message-body">
          <ul className='undone-box'>
         {
            this.state.todos.map(item =>{
            return (
              item.isDone===false 
              ?
              <ListItem 
              key = {item.id} 
              id = {item.id}
              onClick = {this.handleItemClick}
              isDone = {item.isDone}
              >
              {item.content}
              </ListItem>
              :
              ''
            )
          })
         }
       </ul>
        </div>
      </article>
       
      <article className="message is-dark box-right">
        <div className="message-header">
          <p>已完成事项</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
         <ul className='done-box'>
            {
              this.state.todos.map(item => {
                return (
                  item.isDone===true 
                  ?
                  <ListItem 
                  key = {item.id} 
                  id = {item.id}
                  onClick = {this.handleItemClick}
                  isDone = {item.isDone}
                  >
                  {item.content}
                  </ListItem>
                  :
                  ''
                )
              })
            }
          </ul>
         </div>
        </article>      
      </div>
     </Fragment>
    );
  }
}

export default App;
