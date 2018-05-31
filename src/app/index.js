var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    render(){
        return(
            <h1>TW</h1>
        );
    }
}﻿
// Put component into HTML page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));