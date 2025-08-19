import React from 'react';
import Link from '@docusaurus/Link';
import '/src/css/customFooter.css'

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/img/logo.png" alt="Riverr" />
            <span>Riverr</span>
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur dolor drakgonil adipiscing elit aliquam mauris.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links">
          <h4>Link</h4>
          <ul>
            <li><Link to="/app">App</Link></li>
            <li><Link to="/docs/intro">Docs</Link></li>
            <li><Link to="/docs/faqs">FAQs</Link></li>
            <li><Link to="/terms">Terms/Privacy</Link></li>
          </ul>
        </div>

        {/* Right: Partners */}
        <div className="footer-partners">
          <h4>Partners</h4>
          <ul>
            <li><a href="https://dfinity.org" target="_blank" rel="noopener">Dfinity</a></li>
            <li><a href="https://dfinity.org" target="_blank" rel="noopener">Dfinity</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <a href="https://x.com/riverrFinance" target="_blank" rel="noopener"><img src='/img/Twitter.svg'/></a>
          <a href="#" target="_blank" rel="noopener"><img src='/img/Instagram.svg'/></a>
          <a href="#" target="_blank" rel="noopener"><img src='/img/Youtube.svg'/></a>
        </div>
      </div>

    </footer>
  );
}
