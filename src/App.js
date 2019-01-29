import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './Pages/create';
import Edit from './Pages/edit';
import List from './Pages/list-pages';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to={'/'} className="navbar-brand">NoteApp</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to NoteApp</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;