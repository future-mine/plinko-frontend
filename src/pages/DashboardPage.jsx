import React, { useEffect, useState } from "react";
import Layout from "../components/Shared/Layout";
import BalanceBox from "../components/Dashboard/BalanceBox";
import DiscResult from "../components/Dashboard/DiscResult";
import axios from "axios";
import "./dashboard.css";
import attachBearerToken from "../utils/AxiosInterceptor";
import { useAuth } from "../auth/AuthContext";
const discResults = [
  1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1000,
];

const DashboardPage = () => {
  const [timer, setTimer] = useState(null);
  const [balance, setBalance] = useState(0.0);
  const [profit, setProfit] = useState(0.0);
  const [resultIndex, setResultIndex] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0.0);
  const [betSize, setBetSize] = useState(0.0);
  const auth = useAuth();

  attachBearerToken(auth.token);
  const loadUser = async () => {
    const resp = await axios.get("http://localhost:4001/api/v1/user/me", {
      depositAmount,
    });
    if (resp.status !== 200) {
      console.log("Request failed");
      return false;
    }
    setBalance(resp.data.balance);
  };

  useEffect(() => {
    loadUser();
  }, []);
  const deposit = async () => {
    if (depositAmount <= 0) {
      console.log("Deposit amount should be positive");
      return;
    }
    const resp = await axios.post("http://localhost:4001/api/v1/user/deposit", {
      depositAmount,
    });
    if (resp.status !== 200) {
      console.log("Request failed");
      return false;
    }
    setBalance(resp.data.balance);
    setDepositAmount(0);
  };
  const bet = async () => {
    if (betSize <= 0) {
      console.log("Bet amount should be positive");
      return;
    }
    const resp = await axios.post("http://localhost:4001/api/v1/user/bet", {
      betSize,
    });
    if (resp.status !== 200) {
      console.log("Request failed");
      return false;
    }
    setBalance(resp.data.balance);
    setResultIndex(resp.data.resultIndex)
    setProfit(resp.data.profit);
  };
  const startAutoBet = () => {
    const interval = setInterval(() => {
      bet();
    }, 3000);
    setTimer(interval);
  };
  const stopAutoBet = () => {
    clearInterval(timer);
    setTimer(null);
  };
  return (
    <Layout>
      <div className="dashboard-container">
        <div>
          <BalanceBox balance={balance} resultIndex={resultIndex}/>
          <div style={{ marginTop: 50 }}>
            <div className="form-group">
              <label htmlFor="depositAmount">Deposit Amount</label>
              <input
                type="number"
                id="depositAmount"
                value={depositAmount}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDepositAmount(value);
                }}
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={deposit}>
                Deposit
              </button>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <div className="form-group">
              <label htmlFor="betSize">Bet Size</label>
              <input
                type="number"
                id="betSize"
                value={betSize}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setBetSize(value);
                }}
              />
            </div>
            <div className="form-group">
              {!timer ? (
                <button type="button" onClick={startAutoBet}>
                  Start auto bet
                </button>
              ) : (
                <button type="button" onClick={stopAutoBet}>
                  Stop auto bet
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="profit">
            <div>profit: ${profit}</div>
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
