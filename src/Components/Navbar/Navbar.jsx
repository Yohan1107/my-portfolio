import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);

  // Close the menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 769) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock page scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <nav className={`navbar ${open ? "nav-open" : ""}`} aria-label="Main">
      {/* Left: Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        Yohan<br />Olivier
      </a>

      {/* Center: Links (row on desktop, dropdown on mobile) */}
      <ul
        id="site-menu"
        className={`nav-links ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={closeMenu}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right: Theme + Burger */}
      <div className="nav-actions">
        <div className="theme-toggle">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label="Toggle menu"
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
