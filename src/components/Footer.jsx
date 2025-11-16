import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
return (
    <footer>
        <div className="footer-container">
            <div className="brand-logo">
                <img src="/assets/brand.png" alt="brand logo" />
            </div>
            <div className="social-icons">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
                <a href="https://www.linkedin.com/in/adepeju-adekunle-50b489283/"><FaLinkedin /></a>
            </div>
            <div className="quicklinks">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright-section">
            <p>&copy;2025. Twilight's Experiences. All Rights Reserved.</p>
        </div>
    </footer>
);
};

export default Footer;
