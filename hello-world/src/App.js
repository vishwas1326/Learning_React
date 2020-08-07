import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Greet} from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message'
function App() {
  return (
    <div className="App">
    <Greet name="Haritha Cheatangle"/> 
    <Greet name="Ben10" heroName="Heat Blast"/>
    <button>Hero Time </button>
    <Greet name="Hannah Harami">
    <p>Hannah is similar to Rhea Harami</p></Greet> 
    <Welcome name="Haritha Cheatangle"/> 
    <Welcome name="Ben10" heroName="Heat Blast"/> 
    <Welcome name="Hannah Harami"/> 
    <Hello/>
    <Message>
    </Message>
    </div>
  );
}

export default App;
