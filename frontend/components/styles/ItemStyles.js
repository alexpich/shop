import styled from "styled-components";

const ItemStyles = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: flex;
    /* margin: 0 1rem;
    padding: 0 1rem; */
    margin: 0;
    padding: 1rem 0 0 0;
    & > * {
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      background: ${(props) => props.theme.darkGrey};
      color: white;
      border: 0;
      margin-right: 1rem;
      padding: 0.1rem 0.8rem;
      font-size: 1.2rem;
    }
  }
`;

export default ItemStyles;
