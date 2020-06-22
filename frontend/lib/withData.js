import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "../config";
import { LOCAL_STATE_QUERY } from "../components/Bag";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          // destructure cache from "client"
          toggleBag(_, variables, { cache }) {
            // read the bagOpen value from the cache
            const { bagOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // write the bag state to the opposite
            const data = {
              data: { bagOpen: !bagOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        bagOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
