// BalanceBox.js

import React from 'react';

const BalanceBox = ({balance, resultIndex}) => {
  return (
    <div className="balance-box">
      <p>Balance: ${balance}</p>
    </div>
  );
}

export default BalanceBox;
