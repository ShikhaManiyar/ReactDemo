import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import ToDo from './ToDo'

// function App() {
//   return (
//     <div className="App">
//     <Test/>
//     </div>
//   );
// }

class App extends Component{




render(){
  return (
    <div className="App">
         <ToDo/>
    </div>
  );
}
}

export default App;
