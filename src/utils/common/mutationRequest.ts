import { GraphQLClient } from "graphql-request";

export const mutationRequest = async (query: any, variables: any = {}) => {
  const endpoint = process.env.BACKEND_API_URL ?? "http://localhost:5001/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer `,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await graphQLClient.request(query, variables);
};
