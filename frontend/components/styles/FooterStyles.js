import styled from "styled-components";

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
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default FooterStyles;
