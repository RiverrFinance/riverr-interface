import React from "react";
import Link from "@docusaurus/Link";
import "/src/css/customFooter.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link to={'/'} className="footer-logo">
            <img src="/img/logo.png" alt="Riverr" />
            <span>Riverr</span>
          </Link>
          <p className="footer-description">DEFI DONE DIFFERENTLY</p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links">
          <h4>Link</h4>
          <ul>
            <li>
              <Link href="https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard">
                App
              </Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              {/* <Link to="/docs/faqs">FAQs</Link> */}
            </li>
            <li>
              {/* <Link to="/terms">Terms/Privacy</Link> */}
            </li>
          </ul>
        </div>

        {/* Right: Partners */}
        <div className="footer-partners">
          <h4>Partners</h4>
          <ul>
            <li>
              <a href="https://dfinity.org" target="_blank" rel="noopener">
                Dfinity
              </a>
            </li>
            <li>
              <a href="https://dfinity.org" target="_blank" rel="noopener">
                Dfinity
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <a href="https://x.com/riverrFinance" target="_blank" rel="noopener">
            <img src="/img/Twitter.svg" />
          </a>
          <a href="#" target="_blank" rel="noopener">
            <img src="/img/Instagram.svg" />
          </a>
          <a href="#" target="_blank" rel="noopener">
            <img src="/img/Youtube.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
