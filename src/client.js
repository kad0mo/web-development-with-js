import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './client.css';
import Bootstrap from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';

import HelloWorld from './components/helloworld';
import HelloWorldApp from './components/helloworldapp';
import Counterizer from './components/counterizer';
import Greeter from './components/greeter';
import Content from './components/content';





const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <Route path="/hello/:name" component={Greeter}></Route>
            <Route path="/content/" component={Content}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
