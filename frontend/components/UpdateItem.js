import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import ErrorMessage from "./ErrorMessage";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

class UpdateItem extends Component {
  state = {};

  changeHandler = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    // console.log(this.state);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>Item not found (ID {this.props.id})</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                // <Form
                //   onSubmit={async (e) => {
                //     e.preventDefault();
                //     const res = await updateItem();
                //     Router.push({
                //       pathname: "/item",
                //       query: { id: res.data.updateItem.id },
                //     });
                //   }}
                // >
                <Form onSubmit={(e) => this.updateItem(e, updateItem)}>
                  <ErrorMessage error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    {/* TODO: Handle update image */}

                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.item.title}
                        onChange={this.changeHandler}
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={data.item.price}
                        onChange={this.changeHandler}
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="A description."
                        required
                        defaultValue={data.item.description}
                        onChange={this.changeHandler}
                      />
                    </label>
                    <button type="submit">SAV{loading ? "ING" : "E"}</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
