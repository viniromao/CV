import React from 'react';
import jpg from "/home/vinicius/Público/cv-vinicius/src/12360163_904882306265480_7113064388964326956_n.jpg";
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <header className="App-header ">
   
      <img className="image" src={jpg} alt="portrait"></img>
        <code
          className="App-link textAnimation"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi!! My name is Vinicius Romão
       <br></br>
          Have you seen my work?
        </code>
        <Link to="/Main">
        <button className="buttonStyle" variant="outlined">
        <code>Let's see!</code>
         
       
       
      </button>
      </Link>
      </header>
    </div>
  );
}

export default App;
 