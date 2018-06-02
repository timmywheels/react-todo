var React = require('react');
var ReactDOM = require('react-dom');

import { Component } from 'react';

// Create component
export class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['code', 'eat', 'code more'],
            age: 30
        };
    }
    render() {
        var ager = setTimeout(function () {
            this.setState({
                age: 35
            })
        }.bind(this), 5000);
        return (
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>

                </ul>
            </div>
        );
    } // Render
}
// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));