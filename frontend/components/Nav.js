import React from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
import { TOGGLE_BAG_MUTATION } from "../components/Bag";
import NavStyles from "../components/styles/NavStyles";
import User from "../components/User";
import Signout from "../components/Signout";
import BagCount from "../components/BagCount";

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>

        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />

            {/* TODO: Replace with a shopping bag icon */}
            <Mutation mutation={TOGGLE_BAG_MUTATION}>
              {(toggleBag) => (
                <button onClick={toggleBag}>
                  Bag{" "}
                  <BagCount
                    count={me.bag.reduce(
                      (i, bagItem) => i + bagItem.quantity,
                      0
                    )}
                  />
                </button>
              )}
            </Mutation>
          </>
        )}

        {!me && (
          <>
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
