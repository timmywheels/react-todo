var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello, World</h1>
                <p>Get Ready</p>
            </div>
        );
    }
}﻿
// Put component into HTML page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));