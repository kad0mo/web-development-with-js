

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


export default Counterizer;
