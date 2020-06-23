import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import ErrorMessage from "../components/ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              await signup();
              this.setState({ email: "", password: "", name: "" });
              Router.push({
                pathname: "/",
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Up</h2>
              <ErrorMessage error={error} />
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

              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Alex Pich"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign Up</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
