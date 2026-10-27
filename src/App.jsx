import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from './redux/slices/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(incrementCount(5))}>Increment</button>
      <button onClick={() => dispatch(decrementCount(5))}>Decrement</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}

export default App