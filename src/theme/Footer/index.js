import "../../css/footer.css";

export default function FooterWrapper(props) {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        <div className="custom-footer-left">
          <div>
            <a href="/" className="custom-footer-logo">
              <img src="/img/logo.png" alt="Riverr Logo" />
              <span>Riverr</span>
            </a>
            <p className="custom-footer-description">DEFI DONE DIFFERENTLY</p>
          </div>

          <div className="custom-footer-socials">
            <a
              href="https://x.com/riverrFinance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="custom-footer-right">
          <div className="custom-footer-links">
            <h4>Link</h4>
            <ul>
              <li>
                <a href="https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard" target="_blank" rel="noopener noreferrer">
                  App
                </a>
              </li>
              <li>
                <a href="/docs/">Docs</a>
              </li>
            </ul>
          </div>

          <div className="custom-footer-partners">
            <h4>Partners</h4>
            <ul>
              <li>
                <a href="https://dfinity.org" target="_blank" rel="noopener noreferrer">Dfinity</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
