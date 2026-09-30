import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,increase5 } from './redux/slices/counterSlice';

const App=()=>{
  const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count);
  return (    
    <>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(increase5())}}>Increase By 5</button>
    </>
  );
}
export default App;