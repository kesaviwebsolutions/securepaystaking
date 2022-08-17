import React from "react";
import { FaDiscord, FaTwitter, FaTelegramPlane, FaInstagramSquare, FaMedium } from "react-icons/fa";
import footerLogo from "../images/logo.ico"

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer-area">
          <div className="footer-content">
            <a
              href="https://secure-pay.io/documents/whitepaper.pdf"
              target="_blank"
              className="whitepaper"
            >
              WHITEPAPER
            </a>
          </div>
          <div className="footer-social-icons">
            <div className="social-icons text-center">
                <FaDiscord className="mx-3 my-3" size={30}/>
                <FaTwitter className="mx-3 my-3" size={30}/>
                <FaTelegramPlane className="mx-3 my-3" size={30}/>
                <FaInstagramSquare className="mx-3 my-3" size={30}/>
                <FaMedium className="mx-3 my-3" size={30}/>
            </div>
          </div>
          <div className="footer-email">
          <img src={footerLogo} alt="" className="footerImg"/>
            <a href="mailto:hello@jimmymakesthings.com" className="email">hello@securepay.io</a>
          </div>
        </div>
      </div>
    </div>
  );
}
