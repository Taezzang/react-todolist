import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log({id});
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {   //
                    e.stopPropagation();    // onTooggle 실행 막음
                    onRemove(id)    
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✔</div>)
                }
            </div>
        );
    }
}

export default TodoItem;