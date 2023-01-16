import { makeSelect } from "./selectors";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./slice";

export const Counter = () => {
     const dispatch = useDispatch();
     const counter = useSelector(makeSelect)

     const handleIncrement = () => {
        dispatch(increment())
     }
     const handleDecrement = () => {
        dispatch(decrement())
     }

    return(
       <div> 
        <button onClick={handleIncrement}>Povecaj</button>
        <p>Counter: {counter}</p>

        <button onClick={handleDecrement}>Smanji</button>
       </div>
    )
}