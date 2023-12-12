import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';

export const useGQLQuery = (queryKey, query, options, token) => {
  const endpoint = "https://swapi-graphql.netlify.app/.netlify/functions/index";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const queryFn = async () => {
    return await graphQLClient.request(gql`${query}`);
  }

  return useQuery({queryKey,queryFn , ...options});
};