import React, { useState } from "react";

import "../styles/App.css";
const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  return (
    <div id="main">
      <div id="number-display">
        {numbers.map((number) => {
          return <div key={number}>{number}</div>;
        })}
        <button
          id="back-button"
          disabled={numbers[0] < 6 ? true : false}
          onClick={() => {
            const prevNumbers = numbers.map((number) => {
              return number - 5;
            });
            setNumbers(prevNumbers);
          }}
        >
          Prev Page
        </button>
        <button
          id="next-button"
          onClick={() => {
            const nextNumbers = numbers.map((number) => {
              return number + 5;
            });
            setNumbers(nextNumbers);
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default App;
