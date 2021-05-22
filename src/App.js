import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './navigation/NavBar';
import Cryptocurrency from './pages/Cryptocurrency'
import Metals from './pages/Metals'
import News from './pages/News'
import Stocks from './pages/Stocks'

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Switch>
              <Route path='/cryptocurrency' component={Cryptocurrency}/>
              <Route path='/metals' component={Metals}/>
              <Route path='/news' component={News}/>
              <Route path='/stocks' component={Stocks}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
