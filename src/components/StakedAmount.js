import React, { useState } from 'react'
import logo from '../images/logo.ico'

export default function StakedAmount() {
  const [count, setCount] = useState(0)
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
                ''
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
          <div className="pairs">
            <div className="single-pairs d-flex  justify-content-around">
              <h3 className='summary'>Duration :</h3>
              <p className="values">30 Days</p>
            </div>
            <div className="single-pairs d-flex justify-content-around">
              <h3 className='summary'>APY: </h3>
              <p className="values">30%</p>
            </div>
            <div className="single-pairs d-flex justify-content-around">
              <h3 className='summary'>Stake Amount: </h3>
              <p className="values">0 SRPAY</p>
            </div>
            <div className="single-pairs d-flex justify-content-around">
              <h3 className='summary'>Estimated Return: </h3>
              <p className="values">0 SRPAY</p>
            </div>
            <div className="single-pairs d-flex justify-content-around">
              <h3 className='summary'>Start Date: </h3>
              <p className="values">Tue, 16 Aug 2022 17:57:34 GMT</p>
            </div>
            <div className="single-pairs d-flex justify-content-around">
              <h3 className='summary'>End Date :</h3>
              <p className="values">Thu, 15 Sep 2022 17:57:34 GMT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
