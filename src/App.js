import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/App.css'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Sidebar/> 
          <Switch>
            <Route path='/contacts' component={Contacts}/>     
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
