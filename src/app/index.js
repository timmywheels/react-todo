var React = require('react');
var ReactDOM = require('react-dom');

// Create component
class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello, World</h1>
                <p>Get Ready</p>
                <p>{this.props.msg}</p>
                <p><strong>Programming Language: </strong>{this.props.coding.language}</p>
                <p><strong>Language Difficulty: </strong>{this.props.coding.difficulty}</p>
                <p><strong>Language Developer: </strong>{this.props.coding.developer}</p>
            </div>
        );
    }
}﻿

var myCode = {language: 'React', difficulty: 'Medium', developer: 'Facebook'};
// Put component into HTML page
ReactDOM.render(<TodoComponent msg="I love coding." coding={myCode}/>, document.getElementById('todo-wrapper'));