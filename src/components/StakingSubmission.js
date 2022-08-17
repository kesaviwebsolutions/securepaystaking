import React, { useState } from 'react'
import { ImCheckboxChecked } from 'react-icons/im'
import StakedAmount from './StakedAmount'

export default function StakingSubmission() {
  const [active, setActive] = useState(false)
  const [unactive, setUnActive] = useState(false)
  const [active2, setActive2] = useState(false)
  const [unactive2, setUnActive2] = useState(false)
  const [checkbox,setcheckBox] = useState(false);
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
                className={`card card-section ${!unactive ? 'active' : ''}`}
                onClick={() => {
                  setUnActive(false)
                  setActive(false)
                  setUnActive2(false)
                  setActive2(false)
                }}
              >
                <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon"/>
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
                className={`card card-section ${active ? 'active' : ''}`}
                onClick={() => {
                  setActive(true)
                  setUnActive(true)
                  setActive2(false)
                  setUnActive2(false)
                  setcheckBox(true)
                }}
              >
                 <ImCheckboxChecked size={32} color="#3cc05d" id={`${active && checkbox ? 'checkIcon' : ""}`}/>
                <div className="card-body ss-text">
                  <h5 className="card-title styling">180 Days</h5>
                  80% APY
                  <h6 className="card-subtitle mb-2 subtitleStyling"></h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div
                className={`card card-section ${active2 ? 'active' : ''}`}
                onClick={() => {
                  setActive2(true)
                  setActive(false)
                  setUnActive2(false)
                  setUnActive(true)
                }}
              >
                <ImCheckboxChecked size={32} color="#3cc05d" id="checkIcon"/>
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
                className={`card card-section ${unactive2 ? 'active' : ''}`}
                onClick={() => {
                  setUnActive2(true)
                  setActive(false)
                  setActive2(false)
                  setUnActive(true)
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
      <StakedAmount />
    </div>
  )
}
