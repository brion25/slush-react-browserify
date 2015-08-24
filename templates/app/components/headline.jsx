var React = require('react');

var Headline = React.createClass({
    render:function(){
        return (
            <h1> Hello {this.props.name} </h1>
        );
    }
});

module.exports = Headline;