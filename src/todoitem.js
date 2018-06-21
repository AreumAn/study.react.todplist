import React, { Component } from 'react';

class TodoItem extends Component {

    state = {
        active: false
    }

    onStrikeThrough = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <div className="todo-item">
                <button className="remove" onClick={(e) => {
                    this.props.onDelete(this.props.item)
                }}>&times;</button>
                <div>
                    <div className="todo-text"
                        key={this.props.index}
                        // eslint-disable-next-line
                        className={this.state.active ? 'active' : 'notActive'}
                        onClick={this.onStrikeThrough}>{this.props.item}
                        <span className="check-mark">&#x2713;</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default TodoItem;