import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import CreateAccount from './components/createAccount';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/createAccount" component={CreateAccount}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
