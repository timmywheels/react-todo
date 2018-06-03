var React = require('react');
var createReactClass = require('create-react-class');

require('./css/add-item.css');

var AddItem = createReactClass({
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Add"/>
            </form>
        );
    },

    // Custom functions
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        this.refs.newItem.value = '';
    }


});

module.exports = AddItem;