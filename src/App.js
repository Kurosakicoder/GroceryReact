import React from 'react';
import './App.css';
import Home from './Home';
import { Router } from '@reach/router'
import NotFound from './NotFound';
import SpoonInfo from './SpoonInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SpoonInfo path="/:spoonId" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
