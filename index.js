import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AllUsers} from './components/allUsers';
import { BrowserRouter  as Router,Route,Link,Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {DisplayUserData} from './components/displayUserData';
import {NoMatch} from './components/noMatch';

ReactDOM.render(<Router><div><Switch><Route exact path = "/" component = {App}></Route>
<Route path = "/submit" component = {AllUsers}></Route>
<Route path = "/userdetail/:id" component = {DisplayUserData}></Route>
<Route component={NoMatch} /></Switch>
</div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
