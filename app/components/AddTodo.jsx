import React, { Component } from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = "";
            // this.props.onAddTodo(todoText);
            dispatch(actions.startAddTodo(todoText));
        }
        else {
            this.refs.todoText.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What u want to do" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}



/*export var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = "";
           // this.props.onAddTodo(todoText);
            dispatch(actions.startAddTodo(todoText));
        }
        else {
            this.refs.todoText.focus();
        }
    },
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What u want to do" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});*/

export default connect()(AddTodo);
