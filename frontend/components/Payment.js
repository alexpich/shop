import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import ErrorMessage from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

function totalItems(bag) {
  return bag.reduce((tally, bagItem) => tally + bagItem.quantity, 0);
}

class Payment extends Component {
  onToken = (res) => {
    console.log(res);
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <StripeCheckout
            amount={calcTotalPrice(me.bag)}
            name="Shop"
            description={`${totalItems(me.bag)} Items`}
            image={me.bag[0].item && me.bag[0].item.image}
            stripeKey="pk_test_51GwMUvLVsO2imhyhae9LQUxKvAUFW1sWDTwlpSruVpuAW7stFxBWYEpnhaaT5hzruMzeC9MU0fqTgkxL3xCNmfB700CyNDwGFj"
            currency="USD"
            email={me.email}
            token={(res) => this.onToken(res)}
          >
            {this.props.children}
          </StripeCheckout>
        )}
      </User>
    );
  }
}

export default Payment;
