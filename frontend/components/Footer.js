import React, { Component } from "react";
import Link from "next/link";
import FooterStyles from "./styles/FooterStyles";

const Footer = (props) => {
  return (
    <FooterStyles>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>About</h3>
        <ul>
          <li>
            <a href="https://alexpich.com">Developer</a>
          </li>
          <li>
            <a href="https://github.com/alexpich">Git</a>
          </li>
          <li></li>
        </ul>
      </div>
    </FooterStyles>
  );
};

export default Footer;
