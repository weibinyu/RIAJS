/**
 * Created by pc on 2015/11/16.
 */

var React = require('react');

var Hello = React.createClass({
    render: function() {
        return <h1>Hello world</h1>;
    }
});

React.render(<Hello/>, document.querySelector('body'));