import React, { Component } from 'react'

import './App.css';
export default class TodoList extends Component {
  state={
    items:[
    
    ],
    inputV:"",
   
  }
  handleChange=(event)=>{
    this.setState({inputV:event.target.value})
  }
  addTodo=(event)=>{
    event.preventDefault();
    this.setState({
        items:[...this.state.items, {text:this.state.inputV,togler:false}],
         inputV:''
        
    })}
 
    deleteTodo=(event)=>{
      var id=event.target.id;
this.state.items.splice(id,1)
      this.setState({items:this.state.items})
    }

    handleClick=(key)=> {
      this.setState({
      items:this.state.items.map((el,i)=>
        i===key ? {...el,togler:!el.togler}:el
      )
      })
    }
    render() {
        return (
        
            <div className="navbar">
            <div className="todo">
              <h1 className="todo-app">To-Do App!</h1>
              <p className="newtodo">Add New To-Do</p>
            </div>
           
              <input type="text"
                     className="enter" 
                     placeholder="Enter new task" 
                     onChange={(event)=>this.handleChange(event)}
                     value={this.state.inputV}/><br/>
              <button className="btn-add" onClick={this.addTodo}>Add</button>
           <div className="lists">
            <p className="prg-let">Let's get some work done!</p>

            {/* affichage */}
            <ul id="list">
            {this.state.items.map((el,i)=>
            <li key={i} className='item'>
         <button className="complete-btn" onClick={()=>this.handleClick(i)}> {!el.togler ? "Complete":"Undo"} </button>
     {/* <span className={!el.togler ? null:"deco"}>{el.todo}</span> */}
            <button className="delete-btn" id={i} onClick={this.deleteTodo}>Delete</button>
            <p style={{
              display:'inline',
              textDecoration:el.togler ? "line-through":"none"
            }}>{el.text}</p>
           
               </li>)}
            </ul>
          </div> 
        
          </div>
        )
    }

  }