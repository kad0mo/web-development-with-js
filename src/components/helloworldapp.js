import React from 'react';
import axios from 'axios';
import {Nav, NavItem} from 'react-bootstrap';

import HelloWorld from './helloworld';
import Counterizer from './counterizer';

function getTussit() {
  return axios.get('/api/tussi').then((response) => {
    return response.data;


  const tussit = getTussit();

  tussit.then((data) => console.log(data));
    });

}




const HelloWorldApp = React.createClass({
    render: function () {

      function handleSelect(selectedKey) {

      }

      const names = this.state.names;

        return (
            <div>

              <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
                <NavItem eventKey={1} href="/home">Tabi 1</NavItem>
                <NavItem eventKey={2} href="">Tabi 2</NavItem>
                <NavItem eventKey={3} disabled>Tabi 3</NavItem>
              </Nav>




            <h1>Supp</h1>
            <h2>moi</h2>

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

export default HelloWorldApp;
