import React, {useState} from 'react'
import './App.css';

function App() {

  const [state = {userInput: ''}, setState]=useState()

  const handleChange=(event)=>{
    setState({userInput:event.target.value})
  }

  const formStyle={
    fontSize:'100px',
    color:'blue'

  }

  return (
    <div className="App">
      <form>
        <label><input type='text' onChange={handleChange} value ={state.userInput}/>
        <p style={formStyle}>{state.userInput}</p>
        </label>
        
      </form>
     
    </div>
  );
}

export default App;
