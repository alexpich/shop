import React from "react";
import PropTypes from "prop-types";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import Title from "../components/styles/Title";
import RemoveFromBag from "../components/RemoveFromBag";

const BagItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  img {
    margin-right: 10px;
  }
  p {
    color: ${(props) => props.theme.mediumGrey};
  }
`;

const BagItem = (props) => {
  if (!props.bagItem.item)
    return (
      <BagItemStyles>
        <div></div>
        <p>This item is no longer available.</p>
        <RemoveFromBag id={props.bagItem.id} />
      </BagItemStyles>
    );
  return (
    <BagItemStyles>
      <img
        width="100"
        src={props.bagItem.item.image}
        alt={props.bagItem.item.title}
      />
      <div className="bag-item-details">
        <Title>{props.bagItem.item.title}</Title>
        <p>
          {formatMoney(props.bagItem.item.price * props.bagItem.quantity)}
          {" --- "}
          <em>
            {props.bagItem.quantity} &times;{" "}
            {formatMoney(props.bagItem.item.price)}
          </em>
        </p>
      </div>
      <RemoveFromBag id={props.bagItem.id} />
    </BagItemStyles>
  );
};

BagItem.propTypes = {
  bagItem: PropTypes.object.isRequired,
};

export default BagItem;
