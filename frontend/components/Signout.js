import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER_QUERY } from "./User";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

function routeToSignin(item) {
  Router.push({
    pathname: "/signup",
  });
}

const Signout = (props) => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={routeToSignin}
  >
    {(signout) => <button onClick={signout}>Sign Out</button>}
  </Mutation>
);

export default Signout;
