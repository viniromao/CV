import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Pages/Main.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar

ReactDOM.render(  <BrowserRouter basename={process.env.PUBLIC_URL}><Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/Main" component={Main} />
</Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
