import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import StakedAmount from "./StakedAmount";

export default function StakingSubmission() {
  return (
    <div>
      <div className="container">
        <div className="staking-area">
          <div className="stakingsubmission">
            <h4 className="ss-heading">Staking Submission</h4>
          </div>
        </div>
        <div className="stakingsubmission-cards">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card card-section active">
                <ImCheckboxChecked
                  size={32}
                  color="#3cc05d"
                  className="checkIcon"
                />
                <div className="card-body ss-text">
                  <h5 className="card-title styling">90 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    50% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card card-section">
                <div className="card-body ss-text">
                  <h5 className="card-title styling">180 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    80% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card card-section">
                <div className="card-body ss-text">
                  <h5 className="card-title styling">365 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    120% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card card-section">
                <div className="card-body ss-text">
                  <h5 className="card-title styling">30 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    30% APY
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StakedAmount />
    </div>
  );
}
