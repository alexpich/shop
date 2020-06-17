import styled from "styled-components";

const ItemStyles = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    margin: auto;
  }

  img {
    width: 100%;
    max-width: 400px;
    height: 300px;
    object-fit: contain;
    @media (max-width: 768px) {
      height: 350px;
    }
    @media (max-width: 576px) {
      height: 400px;
    }
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.4rem;
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
      padding: 0.2rem 1rem;
      font-size: 1rem;
    }
  }
`;

export default ItemStyles;
