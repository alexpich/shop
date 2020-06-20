import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
      >
        {(addToBag) => <button onClick={addToBag}>ADD TO BAG</button>}
      </Mutation>
    );
  }
}
export default AddToBag;
