import React from "react"
import socialLinks from "../constants/socialLinks"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return <footer className="footer">
    <div>
      <h5>Phone: &nbsp;+91 7042437761</h5>
      <h5>Email: &nbsp;contact@webappetize.com</h5>
      <SocialLinks styleClass="footer-links"/>
      <h4>
        copyright &copy; {new Date().getFullYear()}
        <span>WebAppetize</span> all rights reserved
      </h4>
    </div>
  </footer>
}

export default Footer
