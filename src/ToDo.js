import React,{Component} from 'react';
import { connect } from "react-redux";


class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = { text: "", todos: [],test:"" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }


handleChange(event) {
  let value = event.target.value;
  this.props.dispatch({type:"INPUT_CHANGE",text:value});
}

handleSubmit(event){
event.preventDefault();
this.props.dispatch({type:"ADD_TODO",text:this.props.text})
}

handleDelete(event){
event.preventDefault();
this.props.dispatch({type:"DELETE_TODO",text:this.props.text})
}

handleEdit(event){
  event.preventDefault();
  this.props.dispatch({type:"EDIT_TODO",text:this.props.text})
}

render(){
 
return(
  
  <div>
         <ul>
          {this.props.todos.map((todo, index) => {
            return <li key={index}> {todo} </li>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.text}
            onChange={this.handleChange}
          />
           
          <button> Add </button>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
          <button onClick={this.handleEdit.bind(this)}>Edit</button>
        </form>
  </div>

);
}

}
const mapStateToProps=state=>{
  return{
    todos:state.todos,
    text:state.text
   
  }
}
export default connect(mapStateToProps)(ToDo);
