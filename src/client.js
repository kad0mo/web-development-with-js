import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';

function getTussit() {
return axios.get('/api/tussi').then((response) => {
  return response.data;
});

}

const tussit = getTussit();

tussit.then((data) => console.log(data));

const losot = ['Panu', 'Panun isä', 'Panun äiti'];
const laihtutetut = losot.map (loso => 'laihempi' + loso);



const HelloWorld = React.createClass({
    render: function () {
    return (
        <div>
            <Link to={`/hello/${this.props.name}`}>
                Hello {this.props.name}
            </Link>
        </div>
    );
}
});


const HelloWorldApp = React.createClass({
    render: function () {

      const names = this.state.names;

        return (
            <div>
            <h1>Sup</h1>

            {names.map((name,i) =>
                <HelloWorld key={i} name={name}/>
            )}

            <Counterizer
            count={this.state.count}
            onIncrementCounter={this.IncrementCounter}/>

            {this.props.children}
             </div>
        );
    },

    getInitialState: function() {
      return {
          count: 0,
          name: 'Partsi',
          names: []
      };
    },



    componentDidMount: function () {
        getTussit().then((data) => {
            this.setState({
                names: data
              });

        });

    },

    IncrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
});

    const Counterizer = React.createClass({
      render: function() {
        return (
            <div className = "luku">
                {this.props.count}

                <button className="nappi"
                    onClick={this.props.onIncrementCounter}>
                    Increment
                </button>
            </div>
        );
    }
});

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h2>
                Helloooo {name}
            </h2>
        );
    }
});

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
