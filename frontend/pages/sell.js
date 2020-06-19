import React from "react";
import PromptSignin from "../components/PromptSignin";
import CreateItem from "../components/CreateItem";

const Sell = (props) => (
  <div>
    <PromptSignin>
      <CreateItem />
    </PromptSignin>
  </div>
);

export default Sell;
