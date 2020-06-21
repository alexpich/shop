import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "./User";

const REMOVE_FROM_BAG_MUTATION = gql`
  mutation($id: ID!) {
    removeFromBag(id: $id) {
      id
    }
  }
`;

const RemoveButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

class RemoveFromBag extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  // gets called as soon as we get a response back from the server after a mutation has been performed
  // cache is apollo cache, payload is returned from the server
  update = (cache, payload) => {
    // first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    // remove that item from the bag
    const bagItemId = payload.data.removeFromBag.id;
    data.me.bag = data.me.bag.filter((bagItem) => bagItem.id !== bagItemId);

    // write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_BAG_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: "Mutation",
          removeFromBag: {
            __typename: "BagItem",
            id: this.props.id,
          },
        }}
      >
        {(removeFromBag, { loading, error }) => (
          <RemoveButton
            disabled={loading}
            onClick={() => {
              removeFromBag().catch((err) => alert(err.message));
            }}
            title="Remove"
          >
            &times;
          </RemoveButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromBag;
