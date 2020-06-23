import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterStyles = styled.div`
  background: ${(props) => props.theme.offWhite};
  color: ${(props) => props.theme.darkGrey};
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem 1rem;
  h3 {
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      line-height: 1.6;
      a {
        color: ${(props) => props.theme.darkGrey};
        font-size: 1.25rem;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0;
          bottom: 0;
          left: 0;
          background-color: #fff;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          &:hover {
            visibility: visible;
            height: 3px;
          }
        }
      }
    }
  }
`;

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
