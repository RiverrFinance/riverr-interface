import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../../css/navbar.css";

export default function NavbarWrapper(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(`.custom-sidebar`) &&
        !event.target.closest(`.custom-menu-button`)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Docusaurus-compatible navbar wrapper for TOC */}
      <nav className="navbar navbar--fixed-top" data-navbar="true" style={{display: 'none'}}>
        <div className="navbar__inner">
          <div className="navbar__items">
            <div className="navbar__brand">Riverr</div>
          </div>
        </div>
      </nav>
      
      {/* Custom navbar */}
      <nav className="custom-navbar">
        <div className="custom-navbar-container">
          <div className="custom-logo-section">
            <img src="/img/logo.png" alt="Riverr Logo" className="custom-logo" />
            <a href="/" className="custom-brand-name">RIVERR</a>
          </div>

          <div className="custom-desktop-menu">
            <a href="/docs/" className="custom-nav-link">
              Docs
            </a>
            <a
              href="https://github.com/RiverrFinance/clearing_house"
              className="custom-nav-link"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard"
              className="custom-launch-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </div>

          <button
            className="custom-menu-button"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`custom-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="custom-sidebar-header">
          <div className="custom-sidebar-logo">
            <img
              src="/img/logo.png"
              alt="Riverr Logo"
              className="custom-sidebar-logo-img"
            />
            <a href="/" className="custom-brand-name">RIVERR</a>
          </div>
          <button
            className="custom-close-button"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="custom-sidebar-content">
          <a href="/docs/" className="custom-sidebar-link" onClick={closeSidebar}>
            Documentation
          </a>
            <a
              href="https://github.com/RiverrFinance/clearing_house"
              className="custom-sidebar-link"
              target="_blank"
            >
              GitHub
            </a>
          <a
            href="https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard"
            className="custom-sidebar-launch-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeSidebar}
          >
            Launch App
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="custom-overlay" onClick={closeSidebar} />
      )}
    </>
  );
}
