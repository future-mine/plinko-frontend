// DiscResult.js

import React from "react";
import "./discresult.css";

const DiscResult = ({ results }) => {
  return (
    <div className="disc-result">
      <div className="d-flex">
        {results.map((result, index) => (
          <div
            className="score"
            key={index}
            style={{ backgroundColor: `rgba(255, 123, 0, ${result / 1000})` }}
          >
            <p>{result}x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscResult;
