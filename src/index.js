import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
  // useParams
} from 'react-router-dom';

import App from './App';
import UserDetails from "./components/UserDetails";
import UserPostDetails from "./components/UserPostDetails";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header row">
        <Switch>
          <Route path="/app" component={App}></Route>
          <Route path="/user/:slug/:post" component={UserPostDetails}></Route>
          <Route path="/user/:slug" component={UserDetails}></Route>

          <Redirect path="*" to="/app" />
        </Switch>
        </header>
      </div>
    </Router>
  </Provider >,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
