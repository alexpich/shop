import styled from "styled-components";

const Title = styled.h3`
  /* margin: 0 1rem; */
  /* padding: 0 1rem; */
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: -1rem;
  a {
    color: ${(props) => props.theme.darkGrey};
    display: inline;
    line-height: 1.3;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: left;
  }
`;

export default Title;
