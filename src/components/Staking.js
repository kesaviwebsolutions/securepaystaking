import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Staking() {
  const [activeTab, setActiveTab] = useState(false);
  const [unActiveTab, setUnActiveTab] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="staking-item-area position-relative">
          <ul className="nav nav-pills nav-fill area">
            <div className="items">
              <Link
                className={`nav-link ${!unActiveTab ? "active" : ""} tab`}
                aria-current="page"
                to="/"
                onClick={() => {
                  setActiveTab(false);
                  setUnActiveTab(false);
                }}
              >
                Stake SRPAY
              </Link>
              <Link
                className={`nav-link ${activeTab ? "active" : ""} tab`}
                to="/my-stake"
                onClick={() => {
                  setActiveTab(true);
                  setUnActiveTab(true);
                }}
              >
                My Stake
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
