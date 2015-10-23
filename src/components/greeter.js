import React from 'react';
import Bootstrap from 'react-boostrap';

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


export default Greeter;
