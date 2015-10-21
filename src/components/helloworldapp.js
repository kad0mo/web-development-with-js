import React from 'react';
import api from '../api';

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

export default HelloWorldApp;
