import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';
export const Counter = () => {
    const counter = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(increment(1));
      };
    
      const handleDecrement = () => {
        dispatch(decrement(1));
      };
    
    return (
        <div>
        <h1>Counter {counter} </h1>
            <button className="btnStyle" onClick={()=>handleIncrement()}>+</button>
            <button className="btnStyle" onClick={()=>handleDecrement()}>-</button>
        </div>
    );
};
