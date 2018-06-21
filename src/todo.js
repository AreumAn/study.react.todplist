import React from 'react';


const Todo = props => {

    const {item, onChange, onAddItem} = props;

    return(
        <div>
        <section className="form-wrapper form">
            <input value={item} onChange={onChange} />
            <button className="create-button" onClick={onAddItem }>ADD</button>
        </section>
        </div>
    )
}

export default Todo;
