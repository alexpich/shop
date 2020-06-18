import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";

const theme = {
  lightBlue: "#90CDF4",
  blue: "#63B3ED",
  green: "#4FD1C5",
  lightGrey: "#E2E8F0",
  grey: "#CBD5E0",
  mediumGrey: "#718096",
  darkGrey: "#1A202C",
  offWhite: "#EDEDED",
  lightRed: "#FFF5F7",
  red: "#E53E3E",
  maxWidth: "1000px",
  boxShadow: "0 12px 24px 0 rgba(0,0,0,0.07)",
};

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.darkGrey};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('/static/Montserrat-Regular.ttf')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}
  html {
    box-sizing:border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.darkgrey};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
