import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import logo from "../images/logo.ico";

export default function StakingSubmission() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [unactive, setUnActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [unactive2, setUnActive2] = useState(false);
  const [checkbox, setcheckBox] = useState(false);
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
              <div
                className={`card card-section ${!unactive ? "active" : ""}`}
                onClick={() => {
                  setUnActive(false);
                  setActive(false);
                  setUnActive2(false);
                  setActive2(false);
                }}
              >
                <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" />
                <div className="card-body ss-text">
                  <h5 className="card-title styling">90 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    50% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active ? "active" : ""}`}
                onClick={() => {
                  setActive(true);
                  setUnActive(true);
                  setActive2(false);
                  setUnActive2(false);
                  setcheckBox(true);
                }}
              >
                <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" />
                <div className="card-body ss-text">
                  <h5 className="card-title styling">180 Days</h5>

                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    80% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active2 ? "active" : ""}`}
                onClick={() => {
                  setActive2(true);
                  setActive(false);
                  setUnActive2(false);
                  setUnActive(true);
                }}
              >
                <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon" />
                <div className="card-body ss-text">
                  <h5 className="card-title styling">365 Days</h5>
                  <h6 className="card-subtitle mb-2 subtitleStyling">
                    120% APY
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${unactive2 ? "active" : ""}`}
                onClick={() => {
                  setUnActive2(true);
                  setActive(false);
                  setActive2(false);
                  setUnActive(true);
                }}
              >
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
            <div className="stake">
              <div className="summary-content">
                <p>Duration</p>
                <p className="ssc4">:</p>
                <p className="sc">30 Days</p>
              </div>
              <div className="summary-content">
                <p>APY</p>
                <p className="ssc5">:</p>
                <p className="sc">30 %</p>
              </div>
              <div className="summary-content">
                <p>Staked Amount</p>
                <p className="ssc">:</p>
                <p className="sc">0 SRPAY</p>
              </div>
              <div className="summary-content">
                <p>Estimated Return</p>
                <p className="ssc2">:</p>
                <p className="sc">0 SRPAY</p>
              </div>
              <div className="summary-content">
                <p>Start Date</p>
                <p className="ssc3">:</p>
                <p className="sc">Wed, 17 Aug 2022 18:46:30 GMTY</p>
              </div>
              <div className="summary-content">
                <p>End Date</p>
                <p className="ssc4">:</p>
                <p className="sc">Fri, 16 Sep 2022 18:46:30 GMT</p>
              </div>
            </div>
            <button className="d-block m-auto stake-btton">STAKE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
