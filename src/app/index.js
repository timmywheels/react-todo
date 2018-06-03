var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Link} from 'react-router';

// CSS Requires
require('./css/index.css');

// Module requires
var TodoItem = require('./todo-item');
var AddItem = require('./add-item');
var About = require('./about');


// Routing
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
}



// Create component
    class TodoComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                todos: ['eat', 'sleep', 'code'],

            };
            this.onDelete = this.onDelete.bind(this);
            this.onAdd = this.onAdd.bind(this);
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
                    <p>Todo List</p>
                    <ul>{todos}</ul>
                    <AddItem onAdd={this.onAdd}/>
                    <Link to={'/about'}>About</Link>
                    <a target="_blank" href="https://timwheeler.com"><img class="logo" src="https://timwheeler.com/wp-content/uploads/2017/11/tw-logo-white.svg" alt="TW Logo"></img></a>
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

        onAdd(item){
            var updatedTodos = this.state.todos;
            updatedTodos.push(item);
            this.setState({
                todos: updatedTodos
            })
        }

        // Lifecycle functions
        componentWillMount(){
            console.log('componentWillMount');
        }

        componentDidMount(){ // Good for any grabbing of external data
            console.log('componentDidMount');

        }

        componentWillUpdate(){
            console.log('componentWillUpdate');
        }

};

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));