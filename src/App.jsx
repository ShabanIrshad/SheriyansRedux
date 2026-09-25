import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App=()=>{
  const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count);
  return (    
    <>
      <h1>{count}</h1>
      <button onClick={()=>{}}>Increment</button>
      <button>Decrement</button>
    </>
  );
}
export default App;