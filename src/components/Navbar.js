import React, { useState, useEffect } from "react";
import spay from "../images/spay99.png";
import meta from "../images/meta.png";
import connect from "../images/connect.svg";

export default function Navbar({WalletC,Metamask,user,account,Dissconnect}) {
  const [active, setActive] = useState(false);
  
  const sliceadd = (address) => {
    const first = address.slice(0, 4)
    const second = address.slice(38)
    return first + '...' + second
  }
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={spay} alt="" className="navLogo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav nav-pills pills-area mx-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={() => setActive(true)}>
                  <a
                    className={`nav-link ${active ? "active item" : ""} mx-2`}
                    aria-current="page"
                    href="https://secure-pay.io/index.html"
                    target="_blank"
                  >
                    BACK TO MAIN WEBSITE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${active ? "active item" : ""} mx-2`}
                    href="/"
                    target="_blank"
                  >
                    STAKE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${active ? "active item" : ""} mx-2`}
                    href="https://secure-pay.io/index.html#roadmap"
                    target="_blank"
                  >
                    ROADMAP
                  </a>
                </li>
                <li className="nav-item">
                  <a
                   className={`nav-link ${active ? "active item" : ""} mx-2`}
                    href="https://secure-pay.io/index.html#faqs"
                    target="_blank"
                  >
                    FAQS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                   className={`nav-link ${active ? "active item" : ""} mx-2`}
                    href="https://secure-pay.io/index.html#contact"
                    target="_blank"
                  >
                    CONTACT
                  </a>
                </li>
                {user ? <button
                  type="button"
                  className="btn mx-2 connect-btton"
                  data-bs-target="#exampleModal"
                >
                  {sliceadd(user)}
                </button> : <button
                  type="button"
                  className="btn mx-2 connect-btton"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Connect Wallet
                </button>}
              </ul>
            </div>
          </div>
        </nav>
        {/* MODAL */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title ms-auto heading"
                  id="exampleModalLabel"
                >
                  Please Connect Your Wallet
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="wallet-images">
                  <img src={meta} alt="" className="wi" onClick={()=>Metamask()}/>
                  <img src={connect} alt="" className="wi" onClick={()=>WalletC()}/>
                </div>
              </div>
              {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
