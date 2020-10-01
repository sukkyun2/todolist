import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = ClassNames.bind(styles);

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} =this.props; //비구조화 할당

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/> {/*readOnly는 readOnly = true 와 같다.*/}
                <div className={cx('text',{done})}>{children}</div> 
                <div className={cx('delete')} onClick={(e)=>{
                    onRemove();
                    e.stopPropagation();
                }}>[지우기]</div>   {/* [지우기]를 누르면 onRemove -> onToggle 순으로 이벤트가 전파된다. */}
            </div>
        );
    }
}

export default TodoItem;