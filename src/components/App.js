import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
// import TodoItem from './TodoItem';
import TodoList from './TodoList';

/**
 * 상태관리를 할 때 데이터가 필요한 컴포넌트들의 상위 컴포넌트인 App에서
 * state와 데이터를 정의하고 이를 변화시키는 메서드들도 정의하는 것이 좋다.
 * 여기서 핵심은 상위 컴포넌트이다...
 */

class App extends Component {
    state = {
        input : '', //input 값
        todos : []
    }

    handleChange = (e) => {
        // const {value} = e.target; //e.target.value 
        const value = e.target.value;
        this.setState({
            input : value
        })
    }

    handleInsert = () => {
        const {todos, input} = this.state;

        const newTodo = {
            id : this.getId(),
            text : input,
            done : false
        };

        this.setState({
            todos : [...todos, newTodo],
            input : ''
        });
    }

    id = 1;

    getId = () =>{
        return this.id++;
    }

    handleToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => (todo.id === id));

        const toggled = {
            ...todos[index],
            done : !todos[index].done
        }
        this.setState({
            todos : [
                ...todos.slice(0,index),
                toggled,
                ...todos.slice(index + 1,todos.length)
            ]
        })
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => (todo.id === id))

        this.setState({
            todos : [
                ...todos.slice(0, index),
                ...todos.slice(index+1,todos.length)
            ]
        })
    }

    render() {
        const {input,todos} = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove
        } = this;

        return (
            <PageTemplate>
                <TodoInput value={input} onChange={handleChange} onInsert={handleInsert}/>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        );
    }
}

export default App;