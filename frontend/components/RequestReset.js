import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import ErrorMessage from "../components/ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: "",
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <Form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              const success = await reset();
              this.setState({ email: "" });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Forgot password? Reset</h2>

              <ErrorMessage error={error} />
              {!error && !loading && called && (
                <p>
                  Success! You should be recieving an email containing a reset
                  link shortly.
                </p>
              )}

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">REQUEST</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
