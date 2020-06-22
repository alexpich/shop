import styled from "styled-components";

const OrderItemStyles = styled.li`
  list-style: none;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.offWhite};
  margin-bottom: 2rem;
  padding-bottom: 4rem;
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    text-align: left;
    p {
      color: ${(props) => props.theme.darkGrey};
      line-height: 1.4;
    }
    p span {
      font-weight: 600;
    }
    & > * {
      margin: 0;
      padding: 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
