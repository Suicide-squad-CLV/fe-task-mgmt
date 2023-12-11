import { QueryOptions, useMutation } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

export const useGQLMutation = (query: any, variables: any = {}, options: QueryOptions = {}) => {
  const endpoint = process.env.BACKEND_API_URL ?? "http://localhost:5001/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer `,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const mutationFn = async () => await graphQLClient.request(query, variables);

  return useMutation({ mutationFn, ...options });
};
