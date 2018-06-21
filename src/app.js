import React, {Component} from 'react';
import Header from './header';
import Todo from './todo';
import TodoList from './todoList';

import './styles/app.css'

class App extends Component {

    state = {
        item: '',
        todo: []
    }

    onChange = (event) => {
        this.setState({
            item: event.target.value
        });
        console.log(this.state.item);
    }

    onAddItem = () => {
        this.setState({
            item: '',
            todo: [...this.state.todo, this.state.item]
        })
        console.log(this.state.todo);
    }

    onDelete = (removeItem) => {
        this.setState((prevState) => ({
            todo: prevState.todo.filter((item) => {
                return removeItem !== item
            })
        }))
    }

    render() {
        return(
            <div>
                <main className="todo-list-template">
                <Header /> 
                <Todo 
                    item = {this.state.item}
                    onChange = {this.onChange}
                    onAddItem = {this.onAddItem}
                />
                <TodoList 
                    todo = {this.state.todo}
                    onDelete = {this.onDelete}
                />
                </main>
            </div>
        )
    }
}

export default App;