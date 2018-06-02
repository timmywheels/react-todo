// Put component into HTML page

var React = require('react');
var ReactDOM = require('react-dom');

import { Component } from 'react';

// Create component
    export class TodoComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                todos: ['code', 'eat', 'code', 'sleep'],
            };
        }
        render() {

            var todos = this.state.todos;
            todos = todos.map(function(item, index){

                return(

                    <li>{item}</li>

                );

            });

            return (
                <div id="todo-list">
                    <p>The busiest people have the most leisure...</p>
                    <p>{this.state.age}</p>

                    <ul>{todos}</ul>

                    <listComponent todos={this.state.todos} />
                </div>
            );
        } // Render
    }
// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));