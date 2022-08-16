import React from "react";
import StakingSubmission from "../StakingSubmission";

export default function StakeSRPAY() {
  return (
    <div>
      <div className="container">
        <div className="srpay">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-area">
                <div className="card-body">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Token Staked</h6>
                    <p className="srpay-count">0 SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Average Staking Days</h6>
                    <p className="srpay-count">120 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StakingSubmission />
        </div>
      </div>
    </div>
  );
}
