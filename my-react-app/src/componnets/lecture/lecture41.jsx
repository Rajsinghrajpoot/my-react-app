
import { useState } from "react";
import "./new.css";

export const Newlec = () => {

  // Increment
  const [count, setCount] = useState(0);

  // Decrement
  const [count1, setCountt] = useState(0);

  // Reset increment
  const reset = () => {
    setCount(0);
  };

  // Reset decrement
  const resett = () => {
    setCountt(0);
  };

  return (
    <>
    <div className="main-container">

      <h1 className="main-heading">React Counter App</h1>

      <div className="container">

        {/* Increment Card */}
        <div className="counter-card">
          <h2>Increment Counter</h2>

          <p className="count-value">{count}</p>

          <div className="button-group">
            <button
              className="increment-btn"
              onClick={() => setCount(count + 1)}
            >
              Increment +
            </button>

            <button className="reset-btn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        {/* Decrement Card */}
        <div className="counter-card">
          <h2>Decrement Counter</h2>

          <p className="count-value">{count1}</p>

          <div className="button-group">
            <button
              className="decrement-btn"
              onClick={() => setCountt(count1 - 1)}
            >
              Decrement -
            </button>

            <button className="reset-btn" onClick={resett}>
              Reset
            </button>
          </div>
        </div>
  
      </div>
    </div>
 </>
  );
};
