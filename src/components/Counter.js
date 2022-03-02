import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); //Action contains an object full of keys with reducer methods which can be called for dispatching actions via components
  };

  const incrementCounter = () => {
    dispatch(counterActions.increment()); 
  };

  const increaseCounter= () =>{
    dispatch(counterActions.increase(10)) //Passing the payload as an object/value as an argument {type: UNIQUE_IDENTIFIER, payload: 10}
  }

  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={increaseCounter}>Increase by 10</button>
      <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
