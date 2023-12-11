import { gql } from "graphql-tag";

export const GET_ALL_USERS = gql`
  query GetAllUsers() {
    getAllUsers {
      id
      fullname
      email
      avatar
    }
  }
`;
