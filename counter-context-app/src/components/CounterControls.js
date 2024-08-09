import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
const CounterControls = () => {
    const { increment, decrement, reset } = useContext(CounterContext)
    return (
        <>
            <div className="btn-group" role="group" aria-label="Counter Buttons">
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
                <button type="button" className="btn btn-secondary" onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default CounterControls;