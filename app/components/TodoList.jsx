import React, { Component } from 'react';
var {connect} = require('react-redux');
import Todo from 'Todo';
//var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

export class TodoList extends Component{
    render() {

        var {todos, showCompleted, searchText} = this.props;
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        var renderTodos = () => {
            if (filterTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            return filterTodos.map((todo) => {

                return (<Todo key={todo.id}    {...todo} />);
            });

        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state;
    }
)(TodoList);