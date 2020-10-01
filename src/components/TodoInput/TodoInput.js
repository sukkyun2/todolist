import React from 'react';
import styles from './TodoInput.scss';
import ClassNames from 'classnames/bind';

//TodoInput : input + button
//@param1 : input의 변화가 있을 때 작동하는 이벤트
//@param2 : input의 값
//@param3 : value값을 저장하는 이벤트 


var cx = ClassNames.bind(styles);

const TodoInput = ({onChange,value,onInsert}) => {
    
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onInsert()
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    )

}

export default TodoInput;