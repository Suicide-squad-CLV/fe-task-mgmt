import { QueryKey, QueryOptions, useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

export const useGQLQuery = (queryKey: QueryKey, query: any, variables: any = {}, options: QueryOptions = {}) => {
  const endpoint = process.env.BACKEND_API_URL ?? "http://localhost:5001/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer `,
    },
  });

  const queryFn = async () => await graphQLClient.request(query, variables);

  return useQuery({ queryKey, queryFn, ...options });
};
