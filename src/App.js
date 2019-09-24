import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import homepage from './homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-title">
        {/* <img src="https://developers.marketo.com/wp-content/uploads/2016/06/Marketo-Logo-white-90x198px.png" height="120" width="400"/> */}
        </div>
       <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/homepage" component={homepage} />
          <Route path="/register" component={Register} />
        </Switch>     
      </div>
    );
  }
}

export default App;
