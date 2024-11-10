import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <Button 
          title='Click Me'
          width='100px'
          height='40px'
          text_color="#fff"
          bg_color="#007bff"
        />
      </header>
    </div>
  );
}

export default App;
