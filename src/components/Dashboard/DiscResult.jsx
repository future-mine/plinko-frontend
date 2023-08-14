// DiscResult.js

import React from "react";
import "./discresult.css";

const DiscResult = ({ results }) => {
  const medium = Math.ceil(results.length/2)
  return (
    <div className="disc-result">
      <div className="d-flex">
        {results.map((result, index) => (
          <div
            className="score"
            key={index}
            style={{ backgroundColor: `rgba(255, 123, 0, ${Math.abs(index - medium) / medium})` }}
          >
            <p>{result}x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscResult;
