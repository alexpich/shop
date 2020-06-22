import styled from "styled-components";

const MainButton = styled.span`
  width: auto;
  background: ${(props) => props.theme.darkGrey};
  color: white;
  border: 0;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  text-align: center;
  &[disabled] {
    opacity: 0.5;
    background: ${(props) => props.theme.grey};
  }
`;

export default MainButton;
