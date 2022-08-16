import React from 'react'

export default function MyStake() {
  return (
    <div>
      <div className="container">
        <div className="srpay">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-area">
                <div className="card-body">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Staked</h6>
                    <p className="srpay-count">0 SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Earning</h6>
                    <p className="srpay-count">0 SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mystake-content">
            <div className="mystake">
              <p>Serial</p>
              <p>Staking Date</p>
              <p>Token Amount</p>
              <p>Staking End</p>
              <p>Action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
