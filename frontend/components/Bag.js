import React from "react";
import { Query, Mutation } from "react-apollo";
import { adopt } from "react-adopt";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
import BagStyles from "./styles/BagStyles";
import MainButton from "./styles/MainButton";
import CloseButton from "./styles/CloseButton";
import User, { CURRENT_USER_QUERY } from "./User";
import BagItem from "./BagItem";
import Payment from "./Payment";

const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    bagOpen @client
  }
`;

const TOGGLE_BAG_MUTATION = gql`
  mutation TOGGLE_BAG_MUTATION {
    toggleBag @client
  }
`;

/* eslint-disable */
const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleBag: ({ render }) => (
    <Mutation mutation={TOGGLE_BAG_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});
/* eslint-enable */

const Bag = () => (
  <Composed>
    {({ user, toggleBag, localState }) => {
      const me = user.data.me;
      if (!me) return null;

      return (
        <BagStyles open={localState.data.bagOpen}>
          <header>
            <CloseButton onClick={toggleBag} title="close">
              &times;
            </CloseButton>
            <h3>SHOPPING BAG</h3>
            <p>
              {me.bag.length} Item{me.bag.length === 1 ? "" : "s"}
            </p>
          </header>

          <ul>
            {me.bag.map((bagItem) => (
              <BagItem key={bagItem.id} bagItem={bagItem} />
            ))}
          </ul>

          <footer>
            <p>{formatMoney(calcTotalPrice(me.bag))}</p>
            {me.bag.length && (
              <Payment>
                <MainButton>CHECK OUT</MainButton>
              </Payment>
            )}
          </footer>
        </BagStyles>
      );
    }}
  </Composed>
);

export default Bag;
export { LOCAL_STATE_QUERY, TOGGLE_BAG_MUTATION };
