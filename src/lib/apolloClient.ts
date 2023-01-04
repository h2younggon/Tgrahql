import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: createHttpLink({
    uri: "https://flyby-gateway.herokuapp.com/",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});
