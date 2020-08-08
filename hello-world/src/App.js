import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Greet} from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/functionClick'
import ClassClick from './components/classClick'
import EventBinding from './components/eventBinding'
import ParentComponent from './components/parentComponent'
import UserGreet from './components/userGreet'
function App() {
  return (
    <div className="App">
   <Greet name="Haritha Cheatangle"/> 
    <Greet name="Ben10" heroName="Heat Blast"/>
    <button>Hero Time </button>
    <Welcome name="Haritha Cheatangle"/> 
    <Welcome name="Ben10" heroName="Heat Blast"/> 
    <Welcome name="Hannah Harami"/> 
    <Hello/>
    <Message/>
    <Counter/>
    <FunctionClick/>
    <ClassClick/>
    <EventBinding/>
    <ParentComponent/>
    <UserGreet/>
    </div>
  );
}

export default App;
