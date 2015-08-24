var React = require('react'),
    Headline = require('./components/headline.jsx');

var CenterContainer = React.createClass({
    render : function(){
        return (
            <center>
                <Headline name="<%= authorName %>" />
            </center>
        );
    }
});

React.renderComponent(CenterContainer(),document.getElementById('container'));