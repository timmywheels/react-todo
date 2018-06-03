var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./css/index.css');

// Module requires
var TodoItem = require('./todo-item');

import { Component } from 'react';


// Create component
    export class TodoComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                todos: ['eat', 'sleep', 'code'],

            };
            this.onDelete = this.onDelete.bind(this);
        } // constructor

        render() {
            var todos = this.state.todos;
            todos = todos.map(function (item, index) {
                return (
                    <TodoItem key={index} item={item} onDelete={this.onDelete} />
                );
            }.bind(this));
            return (
                <div id="todo-list">
                    <p>The busiest people have the most leisure...</p>
                    <ul>{todos}</ul>
                </div>
            );
        } // render


        // Custom functions
        onDelete(item){

            var updatedTodos = this.state.todos.filter(function(val, index){
                return item !== val;
            });
            this.setState({
                todos: updatedTodos

            });
        } // onDelete


};

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));