import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component {

    render() {
        
        const {todos,onToggle,onRemove} = this.props;

        var todoList = todos.map(todo =>(
                                    <TodoItem
                                        key={todo.id}
                                        done={todo.done}
                                        onToggle={()=>{onToggle(todo.id)}}
                                        onRemove={()=>{onRemove(todo.id)}}>
                                        {todo.text}
                                    </TodoItem>
                                ))

        return (
            <div>
                {todoList}
            </div>

        );
    }
}

export default TodoList;