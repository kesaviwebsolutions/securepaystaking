import React, { useState } from "react";
import logo from "../images/logo.ico";

export default function StakedAmount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container">
        <div className="staking-area">
          <div className="stakedsubmission my-5 py-4 position-relative">
            <h4 className="ss-heading">Amount to be staked:</h4>
            <img src={logo} alt="" className="stakedImage" />
            <div className="statement">
              <input
                type="number"
                placeholder="Enter amount"
                className="stakedAmount"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              {count < 0 || undefined ? (
                <p className="error-statement">
                  Amount must be greater than zero
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="stake-summary-content">
            <div className="stake">
              <h4 className="srpayBalance">SRPAY Balance : 0 SRPAY</h4>
            </div>
            <div className="stake">
              <h3 className="stakingSummary">Staking Summary</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
