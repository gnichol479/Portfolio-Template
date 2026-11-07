import React from "react";

function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>{name}</span>
        <span>Built with the portfolio workshop starter.</span>
      </div>
    </footer>
  );
}

export default Footer;
