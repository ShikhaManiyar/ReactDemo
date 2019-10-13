import React,{Component} from 'react';
import { render } from 'react-dom';

export default class Test extends Component{
constructor(props){
super(props);

this.state={
  message:'',
  test:'',
  test1:'',
  toDoList: []
}
}
clickHandler(event){
  
  this.setState({

    test:this.state.test +' '+ this.state.message,
 
    
  }) 

  const itemsArray = (this.state.test +' '+ this.state.message).trim().split(' ');
  this.setState({

   
    toDoList: itemsArray
    
  }) 
}

deleteHandler(event){

  const itemsArray = this.state.toDoList.splice(0, 1);

  this.setState({
    message:'',
    test:itemsArray,
    toDoList: itemsArray
    
  }) 
}

changeText(event){
  this.setState({
    
    message:event.target.value
   
  })
  //console.log(this.state.message)
}

render(){
  const items = this.state.toDoList.map(function(item,i){
    //if(item!=''){
      return <li className={"row"} id={i}> {item} </li>;
   // }
   
  });
return(
  
  <div>
  
    <div id="test1"><ul>
          {items}
        </ul></div>
    <input type="text" id="input1" value={this.state.message} onChange={this.changeText.bind(this)}/>
    <button onClick={this.clickHandler.bind(this)}>Click</button>
    <button onClick={this.deleteHandler.bind(this)}>Delete</button>
  </div>

);


}

}


