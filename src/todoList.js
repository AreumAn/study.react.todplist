import React from 'react';

import TodoItem from './todoitem';

const TodoList = props => {
    const { todo, onDelete } = props;

    return (
        <div>
            <section className="todos-wrapper">
                {
                    todo.map((item, index) =>
                        <TodoItem
                            key={index}
                            index={index}
                            item={item}
                            onDelete={onDelete}
                        />
                    )
                }
            </section>
        </div>
    )
}

export default TodoList;