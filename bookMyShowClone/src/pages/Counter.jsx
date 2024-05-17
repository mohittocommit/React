import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        count > 0 ? setCount(count - 1) : null
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className='page-counter page'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 counter-container">
                        <h1>Counter App</h1>
                        <div className="counter-value">{count}</div>
                        <div className="btn-group" role="group" aria-label="Counter Buttons">
                            <button type="button" className="btn btn-primary" onClick={handleIncrement}>+</button>
                            <button type="button" className="btn btn-danger" onClick={handleDecrement}>-</button>
                            <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
