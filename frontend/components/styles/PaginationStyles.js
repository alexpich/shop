import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  & > * {
    margin: 0;
    padding: 5px 10px;
    color: ${(props) => props.theme.darkGrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: ${(props) => props.theme.grey};
    pointer-events: none;
  }
`;

export default PaginationStyles;
