import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import BagStyles from "./styles/BagStyles";
import MainButton from "./styles/MainButton";
import CloseButton from "./styles/CloseButton";

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

const Bag = () => {
  return (
    <Mutation mutation={TOGGLE_BAG_MUTATION}>
      {(toggleBag) => (
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => (
            <BagStyles open={data.bagOpen}>
              <header>
                <CloseButton onClick={toggleBag} title="close">
                  &times;
                </CloseButton>
                <h3>SHOPPING BAG</h3>
                {/* Conditionally render Item or Items */}
                <p> Items</p>
              </header>

              <footer>
                <p>$45.99</p>
                <MainButton>CHECK OUT</MainButton>
              </footer>
            </BagStyles>
          )}
        </Query>
      )}
    </Mutation>
  );
};

export default Bag;
export { LOCAL_STATE_QUERY, TOGGLE_BAG_MUTATION };
