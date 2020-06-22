import React from "react";
import PromptSignin from "../components/PromptSignin";
import Order from "../components/Order";

const OrderPage = (props) => (
  <div>
    <PromptSignin>
      <Order id={props.query.id} />
    </PromptSignin>
  </div>
);

export default OrderPage;
