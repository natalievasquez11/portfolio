import React from 'react';
import './css/App.css';
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      < Main />
      <div className="links">
      <a href="https://www.linkedin.com/in/natalie-vasquez-csm-b0a59749/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
      <a href="https://github.com/natalievasquez11" target="_blank"><i className="fab fa-github-alt fa-3x"></i></a>
      <a href="#"><i className="fas fa-paper-plane fa-3x"></i></a>
      </div>
    </div>
  );
}

export default App;
