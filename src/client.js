import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';

import HelloWorld from './components/helloWorld';
import HelloWorldApp from './components/helloWorldApp';
import Counterizer from './components/counterizer';
import Content from './components/content';


const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
