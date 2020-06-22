import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TO_BAG_MUTATION = gql`
  mutation($id: ID!) {
    addToBag(id: $id) {
      id
    }
  }
`;

class AddToBag extends Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_BAG_MUTATION}
        variables={{
          id: id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToBag, { loading }) => (
          <button disabled={loading} onClick={addToBag}>
            ADD{loading ? "ing" : " TO BAG"}
          </button>
        )}
      </Mutation>
    );
  }
}
export default AddToBag;
