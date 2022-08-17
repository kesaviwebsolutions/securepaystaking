import React from 'react'

export default function MyStake({ user }) {
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
            <table class="table">
              <thead>
                <tr className="head">
                  <th scope="col">Serial</th>
                  <th scope="col">Staking Date</th>
                  <th scope="col">Token Amount</th>
                  <th scope="col">Staking End</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               <tr className='body'>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
