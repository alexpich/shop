import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { format } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemsStyles";
import ErrorMessage from "./ErrorMessage";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const List = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <ErrorMessage error={error} />;
          console.log(orders);
          return (
            <div>
              <h2>Online Orders ({orders.length})</h2>
              <List>
                {orders.map((order) => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: "/order",
                        query: { id: order.id },
                      }}
                    >
                      <a>
                        <div className="order-meta">
                          <p>
                            <span>
                              {format(order.createdAt, "MMMM d, YYYY h:mm a")}
                            </span>
                          </p>
                          <p>
                            {order.items.reduce((a, b) => a + b.quantity, 0)}{" "}
                            Items
                          </p>

                          <p>Total: {formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map((item) => (
                            <img
                              key={item.id}
                              src={item.image}
                              alt={item.title}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </List>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
