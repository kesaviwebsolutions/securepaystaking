import React from "react";
import { Link } from "react-router-dom";

export default function Staking() {
  return (
    <div>
      <div className="container">
        <div className="staking-item-area position-relative">
          <ul className="nav nav-pills nav-fill area">
            <div className="items">
              <Link className="nav-link active tab" aria-current="page" to="/">
                Stake SRPAY
              </Link>
              <Link className="nav-link tab" to="/my-stake">
                My Stake
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
