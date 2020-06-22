import React from "react";
import PromptSignin from "../components/PromptSignin";
import OrderList from "../components/OrderList";

const OrdersPage = (props) => (
  <div>
    <PromptSignin>
      <OrderList/>
    </PromptSignin>
  </div>
);

export default OrdersPage;
