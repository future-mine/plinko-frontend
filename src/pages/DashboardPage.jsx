import React, { useState } from "react";
import Layout from "../components/Shared/Layout";
import BalanceBox from "../components/Dashboard/BalanceBox";
import DiscResult from "../components/Dashboard/DiscResult";
import "./dashboard.css";
const discResults = [
  1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1000,
];

const DashboardPage = () => {
  const [profit, setProfit] = useState(0.00)
  return (
    <Layout>
      <div className="dashboard-container">
        <div>
          <BalanceBox />
        </div>
        <div>
          <div className="earning">
            <div>
            profit: ${profit}</div>
          </div>
          <div className="disc-result">
            <DiscResult results={discResults} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
