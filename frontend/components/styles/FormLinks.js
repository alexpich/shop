import styled from "styled-components";

const MainButton = styled.span`
  color: ${(props) => props.theme.blue};
  border: 0;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 1rem;
  cursor: pointer;
  a {
    color: ${(props) => props.theme.blue};
    border: 0;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1rem;
    cursor: pointer;
  }
`;

export default MainButton;
