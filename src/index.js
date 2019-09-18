import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route } from 'react-router-dom';
import App from './components/App'
import Jokes from './components/Jokes'
import {createBrowserHistory} from 'history';
import Header from './components/Header';
import './index.css'



ReactDOM.render(
<Router history={createBrowserHistory()}>
<Switch>
    <Route exact path='/' render={()=><Header><App /></Header>}></Route>
    <Route path='/jokes' render={()=><Header><Jokes /></Header>}></Route>
</Switch>
</Router>,
 document.getElementById('root'));
